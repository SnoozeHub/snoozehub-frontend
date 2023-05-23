<template>
    <v-card outlined class='card'>
        <v-toolbar>
            <v-toolbar-title>{{ $t('my_beds') }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <template v-slot:append>
                <v-btn variant="outlined" v-show="allowDelete" @click="allowDelete = false">
                    {{ $t('stop_deletion') }}
                </v-btn>
                <v-menu offset="5">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" icon>
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item @click="navigateTo('/add-bed')">
                            <v-icon>mdi-bed</v-icon>
                            <v-list-item-title>{{ $t('add_bed') }}</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="allowDelete = !allowDelete">
                            <v-icon>mdi-delete-forever</v-icon>
                            <v-list-item-title>{{ $t('delete_bed') }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </template>
        </v-toolbar>
        <BedContainer :bedsList="beds" :allowDelete="allowDelete" :onClickCallback="selectBed">
        </BedContainer>
    </v-card>
</template>
  
  
<script setup lang="ts">
import { ref } from 'vue';
import { useFetchMyBeds } from '~/composables/fetchBeds';
import { Bed } from '~/composables/grpc_gen/common-messages';
const beds = ref<Bed[]>([]);
beds.value = await useFetchMyBeds();
const allowDelete = ref(false);

const selectBed = (bedId: string) => {
    navigateTo('/managebed/' + bedId);
}

</script>

<style scoped>
.card {
    margin: auto;
    margin-top: 2em;
    max-width: fit-content;
}
</style>
  