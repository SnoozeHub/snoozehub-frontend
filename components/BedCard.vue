<script setup lang="ts">
import { Bed } from '~~/composables/grpc_gen/common-messages';

const props = defineProps<{ bed: Bed }>();


const cards = ref([
    { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
    { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
    { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
]);


</script>

<template>
    <v-card class="card">
        <v-carousel class="mx-auto">
            <v-carousel-item v-for="card in cards" :key="card.title" :src="card.src" style="aspect-ratio: 1;" cover>
            </v-carousel-item></v-carousel>

        <v-list>
            <v-list-item>
                Bed description: {{ bed.bedMutableInfo?.description }}
            </v-list-item>
            <v-list-item>
                Average evaluation: {{ bed.averageEvaluation }}
            </v-list-item>
            <v-list-item>
                Review count: {{ bed.reviewCount }}
            </v-list-item>
        </v-list>
        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>

            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>

            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<style scoped>
.card {
    max-width: fit-content;
    margin: auto;
}
</style>