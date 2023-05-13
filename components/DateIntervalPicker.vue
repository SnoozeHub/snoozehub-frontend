<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs';


const vuetifyTheme = useTheme();
const range = reactive({
    start: new Date(2020, 9, 12),
    end: new Date(2020, 9, 16),
})

const dragValue = ref<null | { start: Date, end: Date }>(null);
const selectDragAttribute = computed(() => {
    return {
        popover: {
            visibility: 'hover',
            isInteractive: false, // Defaults to true when using slot
        }
    }
});

const darkTheme = computed(() => {
    return vuetifyTheme.current.value.dark;
})

</script>

<template>
    <v-date-picker :is-dark="darkTheme" v-model="range" :select-attribute="selectDragAttribute"
        :drag-attribute="selectDragAttribute" is-range @drag="dragValue = $event">
        <template v-slot:day-popover="{ format }">
            <div>
                {{ format(dragValue ? dragValue?.start : range.start, 'MMM D') }}
                -
                {{ format(dragValue ? dragValue?.end : range.end, 'MMM D') }}
            </div>
        </template>
    </v-date-picker>
</template>

<style scoped>
.inner-layout {
    display: flex;
    align-items: center;

}
</style>