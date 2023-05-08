<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useSessionStore } from '~~/composables/storeExport';

let showDrawer = ref(false);
const sessionStore = useSessionStore();

function login() {
    navigateTo('/eth-authentication');
    showDrawer.value = false;
}

const loading = ref<boolean>(false);

const query = ref<string>();


async function search() {
    if (!query.value) return;


    loading.value = true;
    setTimeout(() => { loading.value = false; }, 1000);
}

const { width } = useDisplay();
const computedWidth = computed(() => useComputedWidth(width.value))



</script>
<template>
    <div>
        <v-layout>
            <v-app-bar prominent elevation="2">
                <div class="default-layout">

                    <div class="inner-layout">
                        <h1 id="title" @click="navigateTo('/')">SnoozeHub</h1>
                        <v-card class="mx" min-width="300px" elevation="0">
                            <v-card-text> <v-text-field :loading="loading" clearable v-model="query"
                                    label="Gateway to your next adventure!" variant="underlined" density="compact"
                                    append-inner-icon="mdi-magnify" single-line hide-details
                                    @click:append-inner="search"></v-text-field></v-card-text>
                        </v-card>
                    </div>
                    <div class="inner-layout">
                        <v-btn icon="mdi-translate"></v-btn>
                        <v-btn icon="mdi-brightness-4"></v-btn>
                        <v-app-bar-nav-icon variant="text" @click.stop="showDrawer = !showDrawer"></v-app-bar-nav-icon>
                    </div>

                </div>
            </v-app-bar>
            <v-navigation-drawer v-model="showDrawer" location="right" temporary>
                <v-list v-if="!sessionStore.userIsAuthenticated">

                    <v-list-item prepend-icon="mdi-account-plus-outline" title="Log In / Sign Up"
                        value="Log In / Sign Up" @click="login">
                    </v-list-item>

                </v-list>
                <v-list v-else>
                    <v-list-item prepend-icon="mdi-calendar-month" title="My bookings"
                        value="My bookings"></v-list-item>
                    <v-list-item prepend-icon="mdi-bunk-bed" title="My beds" value="My beds"></v-list-item>
                    <v-list-item prepend-icon="mdi-logout" title="Log Out" value="Log Out"></v-list-item>

                </v-list>

                <v-divider></v-divider>
                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-chat-question-outline" title="Get Help"
                        value="Get Help"></v-list-item>
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

#title {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-left: 3%;
}
</style>