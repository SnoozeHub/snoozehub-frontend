<template>
    <v-card class="card" v-if="bed !== undefined && imgs !== undefined">
        <v-carousel class="mx-auto">
            <v-carousel-item v-for="img in imgs" :key="img.name" :src="getImageUrl(img)" style="width: 100px;"
                cover></v-carousel-item>
        </v-carousel>

        <v-list>
            <v-list-item>
                <v-list-item-title class="title">{{ $t('bed_description') }}</v-list-item-title>
                <v-list-item-subtitle>{{ bed.bedMutableInfo?.description }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
                <v-list-item-title class="title">{{ $t('average_evaluation') }}</v-list-item-title>
                <v-list-item-subtitle>{{ bed.averageEvaluation }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
                <v-list-item-title class="title">{{ $t('review_count') }}</v-list-item-title>
                <v-list-item-subtitle>{{ bed.reviewCount }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
                <v-list-item-title class="title">{{ $t('address') }}</v-list-item-title>
                <v-list-item-subtitle>{{ bed.bedMutableInfo?.address }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
                <v-list-item-title class="title">{{ $t('coordinates') }}</v-list-item-title>
                <v-list-item-subtitle> lat: {{ bed.bedMutableInfo?.coordinates?.latitude }}, long: {{
                    bed.bedMutableInfo?.coordinates?.longitude }} </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
                <v-list-item-title class="title">{{ $t('features') }}</v-list-item-title>
                <v-list-item-subtitle>
                    {{ bed.bedMutableInfo?.features.map(feature => $t(featureToi18nString(feature))).join(', ') }}

                </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
                <v-list-item-title class="title">{{ $t('minimum_days_notice') }}</v-list-item-title>
                <v-list-item-subtitle>{{ bed.bedMutableInfo?.minimumDaysNotice }}</v-list-item-subtitle>
            </v-list-item>

            <v-list-item>
                <v-list-item-title class="title">{{ $t('host_telegram_account') }}</v-list-item-title>
                <v-list-item-subtitle>{{ bed.hostTelegramUsername }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
                <v-list-item-title class="title">{{ $t('date_availables') }}</v-list-item-title>
                <AvailableDates :date-availables="bed.dateAvailables"></AvailableDates>
            </v-list-item>
        </v-list>
    </v-card>
    <NoBedsFound v-else></NoBedsFound>
</template>
  
<script setup lang="ts">
import { Bed, BedId } from "composables/grpc_gen/common-messages"

const { currentRoute } = useRouter();
const bedId = currentRoute.value.params.id;
const bed = ref<Bed | undefined>(undefined);
bed.value = await useFetchSingleBed({ bedId: bedId as string } as BedId)
console.log(bed.value);
const imgs = await useDeserializeImages(bed.value?.bedMutableInfo?.images as Uint8Array[]);



</script>
  
<style scoped>
.card {
    /* Original card styles */
    margin: 2% 3%;
}
</style>
  