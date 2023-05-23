<template>
    <v-container fluid class="container">
        <v-row justify="space-around">
            <v-col v-for="bed in bedsList" :key="(bed.id?.bedId as string)">
                <BedCard :bed="bed" :allow-delete="allowDelete" :on-click-callback="onClickCallback"></BedCard>
            </v-col>
        </v-row>

    </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { Bed } from '~/composables/grpc_gen/common-messages';

const props = defineProps<{ bedsList: Bed[], allowDelete: boolean, onClickCallback: (_: string) => void }>();
const { width } = useDisplay()

const computedWith = computed(() => useComputedWidth(width.value))
</script>

<style scoped>
.container {
    margin: auto;
    width: v-bind(computedWith);
}
</style>