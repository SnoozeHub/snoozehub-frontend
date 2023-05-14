<script setup lang="ts">
export interface Range {
    start: Date;
    end: Date;
}
import { useTheme } from 'vuetify/lib/framework.mjs';


const vuetifyTheme = useTheme();


const range = reactive<Range>({
    start: new Date(),
    end: new Date(new Date().setDate(new Date().getDate() + 7)),
});
const props = defineProps<{ emitDates: boolean }>();
const emit = defineEmits<{ 'dates-chosen': [value: Range] }>()

watch(() => props.emitDates, (newVal, _) => {
    if (newVal)
        emit('dates-chosen', range);
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
    <v-date-picker :is-dark="darkTheme" v-model="range" :select-attribute="selectDragAttribute" borderless transparent
        :drag-attribute="selectDragAttribute" is-range @drag="dragValue = $event" expanded color="blue">
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
.vc-blue {
    --vc-accent-50: #f0f9ff;
    --vc-accent-100: #e0f2fe;
    --vc-accent-200: #bae6fd;
    --vc-accent-300: #7dd3fc;
    --vc-accent-400: #38bdf8;
    --vc-accent-500: #0ea5e9;
    --vc-accent-600: #0284c7;
    --vc-accent-700: #0369a1;
    --vc-accent-800: #075985;
    --vc-accent-900: #7f919b;
}

.inner-layout {
    display: flex;
    align-items: center;

}
</style>