<script setup lang="ts">
const range = ref({
    start: new Date(),
    end: new Date(),
})
</script>



<template>

    <v-date-picker v-model="range" is-range>
        <template v-slot="{ inputValue, inputEvents }">
            <div>
                <v-text-field v-model="inputValue.start" v-on="inputEvents.start"></v-text-field>
                <v-text-field v-model="inputValue.end" v-on="inputEvents.end"></v-text-field>

            </div>
        </template>
    </v-date-picker>
</template>

<script scoped></script>