<template>
    <v-list v-show="autocompleteResults.length > 0">
        <v-list-item v-for=" result  in  autocompleteResults " :key="result.place_id" @click="selectResult(result)">
            <v-list-item-title v-html="result.description"></v-list-item-title>
        </v-list-item>
    </v-list>
</template>
<script setup lang="ts">
const props = defineProps({
    autocompleteResults: {
        type: Array as PropType<google.maps.places.AutocompletePrediction[]>,
        required: true,
    },
    selectResult: {
        type: Function as PropType<(result: google.maps.places.AutocompletePrediction) => void>,
        required: true,
    },
})
</script>