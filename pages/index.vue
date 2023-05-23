<script setup lang="ts">

import { storeToRefs } from 'pinia'
import { useCacheStore } from '~/composables/storeUtils/cacheStore';

const { bedsList } = storeToRefs(useCacheStore());
if (!bedsList.value) {
    throw new Error('bedsList is undefined');
}

const selectBed = (bedId: string) => {
    navigateTo('/bed/' + bedId);
}

</script>
<template>
    <BedContainer :bedsList="(bedsList)" :allowDelete="false" :onClickCallback="selectBed"></BedContainer>
</template>

