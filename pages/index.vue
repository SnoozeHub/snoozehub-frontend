<script setup lang="ts">
import { BedList_Bed } from '~~/composables/grpc_gen/common-messages'
import { useGrpcStore, useSessionStore } from '~~/composables/storeExport'
import { useComputedWidth } from '~~/composables/breakpoints'
import { useDisplay } from 'vuetify'


let bedList = ref<BedList_Bed[]>()
const grpcStore = useGrpcStore()
const sessionStore = useSessionStore()

grpcStore.initPublicServiceClient()

if (sessionStore.getUserIsAuthenticated)
    grpcStore.initAuthOnlyServiceClient()


try {
    const newBedList = await useFetchBeds()
    if (newBedList == null) throw Errors.NoBedsFound
    bedList.value = newBedList as BedList_Bed[]
    console.log(bedList)
} catch (err) {
    console.log(err)
}

const { width } = useDisplay()

const computedWith = computed(() => useComputedWidth(width.value))

</script>


<template>
    <DateIntervalPicker></DateIntervalPicker>
    <v-container fluid class="container">
        <v-row justify="space-around">
            <v-col v-for="bed in bedList" :key="(bed.id?.bedId as string)">
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