<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs';
import { useI18n } from 'vue-i18n';
import { Date as GrpcDate } from '~/composables/grpc_gen/common-messages';
import { grpcDateToDate } from '~/composables/dateUtils';
const { t } = useI18n();


const vuetifyTheme = useTheme();
const { locale } = useI18n();


const props = defineProps<{ dateAvailables: GrpcDate[] }>();

const attributes = ref([
    // This is a single attribute
    {
        highlight: {
            color: 'green',
            fillMode: 'light',
        },
        popover: { label: t('available') }, // Only objects allowed
        // Your custom data object for later access, if needed
        // customData: { ... },
        // We also need some dates to know where to display the attribute
        // We use a single date here, but it could also be an array of dates,
        //  a date range or a complex date pattern.
        dates: props.dateAvailables?.map((date) => grpcDateToDate(date)) || [],
        // Think of `order` like `z-index`
        order: 1
    }
]);
const darkTheme = computed(() => {
    return vuetifyTheme.current.value.dark;
})

</script>

<template>
    <VCalendar :is-dark="darkTheme" :attributes="attributes" borderless transparent v-bind:locale="locale" expanded
        color="blue" :min-date="new Date()" />
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