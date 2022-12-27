<script setup lang="ts">
import { BedList_Bed } from '~~/composables/grpc_gen/common-messages';


let bedList = ref<BedList_Bed[]>();

try {

    const newBedList = await useFetchBeds();
    if (newBedList == null) throw Errors.NoBedsFound;
    bedList.value = newBedList as BedList_Bed[];
    console.log(bedList);
} catch (err) {

}
</script>


<template>
    <div v-for="bed in bedList" :key="(bed.id?.bedId as string)">
        <BedCard :bed="bed"></BedCard>
    </div>
</template>

<style scoped>

</style>