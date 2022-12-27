<script setup lang="ts">

import { UserIsAuthenticated } from '~~/composables/injectionKeys';

let showDrawer = ref(false);
const { userIsAuthenticated, updateUserIsAuthenticated } = inject<UserIsAuthenticated>(userIsAuthenticatedKey) as UserIsAuthenticated;

function login() {
    navigateTo('/login-signup');
    showDrawer.value = false;
}


</script>
<template>
    <div>
        <v-layout>
            <v-app-bar prominent>
                <div class="default-layout">
                    <h1 id="title" @click="navigateTo('/')">SnoozeHub</h1>
                    <v-app-bar-nav-icon variant="text" @click.stop="showDrawer = !showDrawer"></v-app-bar-nav-icon>

                </div>
            </v-app-bar>
            <v-navigation-drawer v-model="showDrawer" location="right">
                <v-list v-if="!userIsAuthenticated">

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
                    <v-list-item prepend-icon="mdi-cog-outline" title="Settings" value="settings"></v-list-item>
                    <v-list-item prepend-icon="mdi-chat-question-outline" title="Get Help"
                        value="Get Help"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main>
                <slot />
            </v-main>
        </v-layout>

    </div>
</template>
<style scoped>
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