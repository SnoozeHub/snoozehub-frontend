<script setup lang="ts">

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
</script>

<template>
    <v-date-picker v-model="range" :select-attribute="selectDragAttribute" :drag-attribute="selectDragAttribute"
        is-range @drag="dragValue = $event">
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