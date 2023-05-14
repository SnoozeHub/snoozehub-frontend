<script setup lang="ts">
import { useDisplay, useTheme } from 'vuetify';
import { Errors } from '~~/composables/errors';
import { useSessionStore } from '~~/composables/storeExport';
import { Range } from '~~/components/DateIntervalPicker.vue';
import { useFetchCompletion, useFetchCoordinates } from '~/composables/mapsApi';
import { useI18n } from 'vue-i18n';

let web3Errors = ref(new Set<Errors>());

const sessionStore = useSessionStore();
const vuetifyTheme = useTheme();
const { locale } = useI18n();

const range = reactive<Range>({
    start: new Date(),
    end: new Date(new Date().setDate(new Date().getDate() + 7)),
})
let showDrawer = ref<boolean>(false);
let showBookingOverlay = ref<boolean>(false);
const searching = ref<boolean>(false);
const query = ref<string>("");
const place_id = ref<string>("");
const autocompleteResults = ref<google.maps.places.AutocompletePrediction[]>([]);
if (!sessionStore.getIsWeb3CapableBrowser) {
    web3Errors.value.add(Errors.Web3CapableBrowserError);
}
function login() {
    navigateTo('/eth-authentication');
    showDrawer.value = false;
}

function toggleTheme() {
    const theme = sessionStore.getDarkTheme
    sessionStore.setTheme(!theme);
    vuetifyTheme.global.name.value = !theme ? 'dark' : 'light';

}

function toggleLanguage() {
    sessionStore.toggleLanguage();
    locale.value = sessionStore.getLanguage;
}
function logout() {
    const grpcStore = useGrpcStore();
    sessionStore.logout();
    grpcStore.authOnlyServiceClient?.logout;
}


async function searchBeds() {
    if (!query.value) return;
    searching.value = true;
    const coordinates = await useFetchCoordinates(place_id.value);
    console.log(coordinates.toJSON());
    const fetchBeds = await useFetchBeds(range.start, range.start, coordinates, [], 1);
    console.log(fetchBeds);
    searching.value = false;
    showBookingOverlay.value = false;
}

async function fetchCompletion() {
    autocompleteResults.value = await useFetchCompletion(query.value);
}

function selectResult(result: google.maps.places.AutocompletePrediction) {
    query.value = result.description
    autocompleteResults.value = []
    showBookingOverlay.value = true
    place_id.value = result.place_id || ""
}
const { width } = useDisplay();
const computedWidth = computed(() => useComputedWidth(width.value))


</script>
<template>
    <div>

        <ErrorsPrompt :errors="web3Errors"></ErrorsPrompt>
        <v-layout class="fill-height">
            <v-app-bar prominent elevation="2">
                <div class="default-layout">

                    <div class="inner-layout">
                        <h1 id="title" @click="navigateTo('/')">SnoozeHub
                        </h1>
                        <v-menu>
                            <template v-slot:activator="{ props }"> <v-card class="mx" min-width="300px" elevation="0">
                                    <v-card-text> <v-text-field :loading="searching" clearable v-model="query"
                                            v-bind="props" v-bind:label="$t('search_bar_placeholder')" variant="underlined"
                                            density="compact" append-inner-icon="mdi-magnify" single-line hide-details
                                            @input="fetchCompletion" @keyup.enter="selectResult(autocompleteResults[0])"
                                            @click:append-inner="selectResult(autocompleteResults[0])"></v-text-field>

                                    </v-card-text>
                                </v-card></template><v-list v-show="autocompleteResults.length > 0">
                                <v-list-item v-for=" result  in  autocompleteResults " :key="result.place_id"
                                    @click="selectResult(result)">
                                    <v-list-item-content>
                                        <v-list-item-title v-html="result.description"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                    <div class="inner-layout">
                        <v-btn icon="mdi-translate" @click="toggleLanguage"></v-btn>
                        <v-btn icon="mdi-brightness-4" @click="toggleTheme"></v-btn>
                        <v-app-bar-nav-icon variant="text" @click.stop="showDrawer = !showDrawer"></v-app-bar-nav-icon>
                    </div>

                </div>
            </v-app-bar>
            <v-dialog v-model="showBookingOverlay" width="400">
                <v-card>
                    <v-card-title>{{ $t('place_to_go') }}</v-card-title>
                    <v-card-text>
                        <v-text-field class="inner-search" readonly v-model="query" :loading="searching"></v-text-field>
                        <DateIntervalPicker :emit-dates="searching" @dates-chosen="(value: Range) => range = value">
                        </DateIntervalPicker>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="showBookingOverlay = false; searching = false">Cancel</v-btn>
                        <v-btn color="rgb(59, 130, 246)" @click="searchBeds">Search</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-navigation-drawer v-model="showDrawer" location="right" temporary>
                <v-list v-if="!sessionStore.userIsAuthenticated">

                    <v-list-item prepend-icon="mdi-account-plus-outline" v-bind:title="$t('login_signup')" @click="login">
                    </v-list-item>

                </v-list>
                <v-list v-else>
                    <v-list-item prepend-icon="mdi-calendar-month" v-bind:title="$t('my_bookings')"></v-list-item>
                    <v-list-item prepend-icon="mdi-bunk-bed" v-bind:title="$t('my_beds')"></v-list-item>
                    <v-list-item prepend-icon="mdi-logout" v-bind:title="$t('logout')" @click="logout"></v-list-item>

                </v-list>

                <v-divider></v-divider>
                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-chat-question-outline" v-bind:title="$t('get_help')"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main>
                <div class="main-container">
                    <slot />
                </div>
            </v-main>
        </v-layout>

    </div>
</template>
<style scoped>
.calendar-container {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    z-index: 1;
    width: 100%;

}

.main-container {
    max-width: v-bind(computedWidth);
    margin: auto;
}

.inner-layout {
    display: flex;
    align-items: center;
}

.default-layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.v-theme--dark #title {
    color: #9ad2ea;
}

#title {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-left: 3%;
    cursor: pointer;
}
</style>