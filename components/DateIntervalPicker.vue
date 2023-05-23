<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs';
import { useI18n } from 'vue-i18n';

export interface Range {
    start: Date;
    end: Date;
}

const vuetifyTheme = useTheme();
const { locale } = useI18n();


const range = ref<Range>();
const props = defineProps<{ emitDates: boolean, disabledDates?: Date[] }>();
const emit = defineEmits<{ 'dates-chosen': [value: Range] }>()

watch(() => props.emitDates, (newVal, _) => {
    if (newVal)
        emit('dates-chosen', range.value as Range);
})



const darkTheme = computed(() => {
    return vuetifyTheme.current.value.dark;
})

const dragValue = ref<Range>();
const selectDragAttribute = computed(() => ({
    popover: {
        visibility: 'hover',
        isInteractive: false,
    },
}));

</script>

<template>
    <v-date-picker :min-date="new Date()" :is-dark="darkTheme" v-model.range="range" borderless transparent
        v-bind:locale="locale" expanded color="blue" :disabled-dates='disabledDates' :select-attribute="selectDragAttribute"
        :drag-attribute="selectDragAttribute" @drag="dragValue = $event">
        <template #day-popover="{ format }">
            <div class="text-sm">
                {{ format(dragValue ? dragValue?.start : range?.start, 'MMM D') }}
                -
                {{ format(dragValue ? dragValue?.end : range?.end, 'MMM D') }}
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