<script setup lang="ts">
import { Bed, BedId, ProfilePic } from '~~/composables/grpc_gen/common-messages';
import { useDeserializeImages } from '~/composables/imageUtils';
import { useMessageStore } from '~/composables/storeUtils/userMessageStore';
import { useGrpcStore } from '~/composables/storeUtils/grpcStore';

const props = defineProps<{ bed: Bed, allowDelete: boolean, onClickCallback: (_: string) => void }>();
const grpcStore = useGrpcStore();
const messageStore = useMessageStore();
const imgs = await useDeserializeImages(props.bed.bedMutableInfo?.images as Uint8Array[]);

const showOverlay = computed(() => props.allowDelete);
const isDeleted = ref(false);

async function deleteBed() {
    console.log('delete bed');
    try {
        await (await grpcStore.getAuthOnlyServiceClient()).removeMyBed(props.bed.id as BedId);
        messageStore.displaySuccess(Successes.BedDeletingSuccess);
        isDeleted.value = true;
    } catch (e) {
        console.log(e);
        messageStore.displayError(e, Errors.BedDeletingError);
    }
}

</script>

<template>
    <v-card class="card" v-show="!isDeleted" style="cursor:pointer">
        <v-carousel class="mx-auto">
            <v-carousel-item @click="onClickCallback(bed.id?.bedId as string)" v-for="img in imgs" :key="img.name"
                :src="getImageUrl(img)" style="width: 100px; cursor:pointer" cover>
            </v-carousel-item></v-carousel>
        <v-list @click="onClickCallback(bed.id?.bedId as string)" style="cursor:pointer">
            <v-list-item>
                {{ $t('bed_description') }}: {{ bed.bedMutableInfo?.description }}
            </v-list-item>
            <v-list-item>
                {{ $t('address') }}: {{ bed.bedMutableInfo?.address }}
            </v-list-item>
            <v-list-item>
                {{ $t('features') }}: {{ bed.bedMutableInfo?.features.map(feature =>
                    $t(featureToi18nString(feature))).join(', ') }}
            </v-list-item>
            <v-list-item>
                {{ $t('minimum_days_notice') }}: {{ bed.bedMutableInfo?.minimumDaysNotice }}
            </v-list-item>
            <v-list-item>
                {{ $t('host_telegram_account') }}: {{ bed.hostTelegramUsername }}
            </v-list-item>
            <v-list-item>
                {{ $t('average_evaluation') }}: {{ bed.averageEvaluation }}
            </v-list-item>
            <v-list-item>
                {{ $t('review_count') }}: {{ bed.reviewCount }}
            </v-list-item>
        </v-list>
        <v-overlay v-model="showOverlay" contained class="overlay-style">
            <v-card class="overlay-card">
                <v-card-text class="text-center">
                    <div class="overlay-title">{{ $t('delete_bed_confirmation') }}</div>
                    <v-btn color="error" dark @click="deleteBed">
                        {{ $t('confirm_deletion') }}
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-overlay>

    </v-card>
</template>

<style scoped>
.card {
    min-width: 300px;
    margin: auto;
    min-height: 100%
}

.overlay-style {
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlay-card {
    max-width: 400px;
    padding: 24px;
    text-align: center;
    margin: 5%
}

.overlay-title {
    font-size: 1.2rem;
    margin-bottom: 16px;
}
</style>