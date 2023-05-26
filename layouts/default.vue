<script setup lang="ts">
import { useDisplay, useTheme } from 'vuetify';
import { Errors } from '~~/composables/errors';
import { useSessionStore } from '~~/composables/storeExport';
import { Range } from '~~/components/DateIntervalPicker.vue';
import { useFetchCompletion, useFetchCoordinates } from '~/composables/mapsApi';
import { useI18n } from 'vue-i18n';
import { useCacheStore } from '~/composables/storeUtils/cacheStore';
import { storeToRefs } from 'pinia';
import { Bed, Empty } from '~/composables/grpc_gen/common-messages';
import { useMessageStore } from '~/composables/storeUtils/userMessageStore';

const { displayError } = useMessageStore()

const sessionStore = useSessionStore();
const { bedsList } = storeToRefs(useCacheStore());
const vuetifyTheme = useTheme();
const { locale } = useI18n();

const range = ref<Range>({
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
    displayError(new Error('Web3 capable browser required'), Errors.Web3CapableBrowserError);
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
async function logout() {
    const grpcStore = useGrpcStore();
    (await grpcStore.getAuthOnlyServiceClient()).logout(Empty);
    sessionStore.logout();
}


async function searchBeds(range: Range) {
    if (!query.value) return;
    searching.value = true;
    const coordinates = await useFetchCoordinates(place_id.value);
    try {
        bedsList.value = await useFetchBeds(range.end, range.start, coordinates, [], 0) as Bed[];
        console.log(bedsList.value);
    } catch (e: any) {
        displayError(e, Errors.NoBedsFound);
        showBookingOverlay.value = false;
        searching.value = false;
        return;
    }
    searching.value = false;
    showBookingOverlay.value = false;
    navigateTo('/')
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
        <MessagesPrompt></MessagesPrompt>
        <v-layout class="fill-height">
            <v-app-bar prominent elevation="2">
                <div class="default-layout">

                    <div class="inner-layout">
                        <h1 id="title" @click="navigateTo('/')">SnoozeHub
                        </h1>
                        <v-menu>
                            <template v-slot:activator="{ props }"> <v-card class="mx" min-width="335px" elevation="0">
                                    <v-card-text> <v-text-field :loading="searching" clearable v-model="query"
                                            v-bind="props" v-bind:label="$t('search_bar_placeholder')" variant="underlined"
                                            density="compact" append-inner-icon="mdi-magnify" single-line hide-details
                                            @input="fetchCompletion" @keyup.enter="selectResult(autocompleteResults[0])"
                                            @click:append-inner="selectResult(autocompleteResults[0])"></v-text-field>

                                    </v-card-text>
                                </v-card></template>
                            <Autocompletion :autocomplete-results="autocompleteResults" :select-result="selectResult">
                            </Autocompletion>
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
                    <v-card-title>{{ $t('when_to_go') }}</v-card-title>
                    <v-card-text>
                        <v-text-field class="inner-search" readonly v-model="query" :loading="searching"></v-text-field>
                        <DateIntervalPicker :emit-dates="searching" @dates-chosen="searchBeds">
                        </DateIntervalPicker>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="showBookingOverlay = false; searching = false">{{ $t('cancel') }}</v-btn>
                        <v-btn color="rgb(59, 130, 246)" @click="searching = true">{{ $t('search') }}</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-navigation-drawer v-model="showDrawer" location="right" temporary>
                <v-list v-if="!sessionStore.userIsAuthenticated">
                    <v-list-item prepend-icon="mdi-account-plus-outline" v-bind:title="$t('login_signup')" @click="login">
                    </v-list-item>
                </v-list>
                <v-list v-else>
                    <v-list-item prepend-icon="mdi-calendar-month" v-bind:title="$t('my_bookings')"
                        @click="navigateTo('/my-bookings')"></v-list-item>
                    <v-list-item prepend-icon="mdi-bunk-bed" v-bind:title="$t('my_beds')"
                        @click="navigateTo('/my-beds')"></v-list-item>
                    <v-list-item prepend-icon="mdi-account" v-bind:title="$t('my_profile')"
                        @click="navigateTo('/my-profile')"></v-list-item>

                    <v-list-item prepend-icon="mdi-logout" v-bind:title="$t('logout')" @click="logout"></v-list-item>

                </v-list>

                <v-divider></v-divider>
                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-chat-question-outline" v-bind:title="$t('get_help')"
                        @click="navigateTo('/help')"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main style=" padding-top: 0; padding-bottom: 3%;">
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
    min-width: v-bind(computedWidth);
    padding-top: 0px;
    margin: auto;
    padding-bottom: 3%;
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