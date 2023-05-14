<script setup lang="ts">
import { BedList } from '~~/composables/grpc_gen/common-messages'
import { useComputedWidth } from '~~/composables/breakpoints'
import { useDisplay } from 'vuetify/lib/framework.mjs'


const bedList = ref<BedList>()


const { width } = useDisplay()

const computedWith = computed(() => useComputedWidth(width.value))

</script>


<template>
    <v-container fluid class="container">
        <v-row justify="space-around">
            <v-col v-for="bed in bedList?.beds" :key="(bed.id?.bedId as string)">
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