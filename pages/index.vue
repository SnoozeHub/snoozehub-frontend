<script setup lang="ts">
import { useComputedWidth } from '~~/composables/breakpoints'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import { storeToRefs } from 'pinia'
import { useCacheStore } from '~/composables/storeUtils/cacheStore';

const { bedsList } = storeToRefs(useCacheStore());


const { width } = useDisplay()

const computedWith = computed(() => useComputedWidth(width.value))

</script>


<template>
    <v-container fluid class="container">
        <v-row justify="space-around">
            <v-col v-for="bed in bedsList" :key="(bed.id?.bedId as string)">
                <BedCard :bed="bed"></BedCard>
            </v-col>
        </v-row>

    </v-container>
</template>

<style scoped>
.container {
    margin: auto;
    width: v-bind(computedWith);
}
</style>