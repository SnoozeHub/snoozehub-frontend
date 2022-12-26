<script setup lang="ts">
import { reactive } from 'vue';

let show_drawer = ref(false);

</script>
<template>
    <div>
        <v-layout>
            <v-app-bar prominent>
                <div class="default-layout">
                    <h1 id="title">SnoozeHub</h1>
                    <v-app-bar-nav-icon variant="text" @click.stop="show_drawer = !show_drawer"></v-app-bar-nav-icon>

                </div>
            </v-app-bar>
            <v-navigation-drawer v-model="show_drawer" location="right">
                <v-list>
                    <v-list-item prepend-icon="mdi-account-plus-outline" title="Log In / Sign Up"
                        value="Log In / Sign Up"></v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-cog-outline" title="Settings" value="settings"></v-list-item>
                    <v-list-item prepend-icon="mdi-chat-question-outline" title="Get Help"
                        value="Get Help"></v-list-item>
                </v-list>
            </v-navigation-drawer>
            <slot />
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