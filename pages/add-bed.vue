<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" sm="8" md="6">
                <v-card>
                    <v-card-title class="text-center">
                        {{ $t('add_bed') }}
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="saveBed" validate-on="submit">
                            <v-text-field v-model="address" :label="$t('address')" :rules="requiredRule" required
                                @input="fetchCompletion"></v-text-field>
                            <Autocompletion :autocomplete-results="autocompleteResults" :select-result="selectResult">
                            </Autocompletion>
                            <v-textarea v-model="description" :label="$t('description')"></v-textarea>
                            <v-text-field v-model="minimumDaysNotice" :label="$t('minimum_days_notice')" type="number"
                                :rules="useMinimumDaysNoticeRules()" required></v-text-field>
                            <v-checkbox v-for="(feature) in  Object.keys(Feature).filter((v) => !isNaN(Number(v))) "
                                :key="feature" v-model="selectedFeatures[feature as unknown as number]"
                                :label="$t(featureToi18nString(feature as unknown as number))"
                                density="compact"></v-checkbox>
                            <v-file-input v-model="images" v-bind:label="$t('photos')" :rules="fileRules" multiple chips
                                accept="image/png"></v-file-input>
                            <v-btn type="submit" color="primary">{{ $t('save') }}</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { BedMutableInfo, Feature, ProfilePic } from '~/composables/grpc_gen/common-messages';
import { useMessageStore } from '~/composables/storeUtils/userMessageStore';
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const images = ref<File[]>([]);
const grpcStore = useGrpcStore();
const place_id = ref<string>("");

const { displayError, displaySuccess } = useMessageStore();
const fileRules = useCreateFileRules(1, 5)

const inputIsInvalid = computed(() => {
    return !address.value || !minimumDaysNotice.value || !images.value || images.value.length === 0 || fileRules.some((rule) => rule(images.value) !== true) || useMinimumDaysNoticeRules().some((rule) => rule(minimumDaysNotice.value) !== true)
})
async function fetchCompletion() {
    autocompleteResults.value = await useFetchCompletion(address.value);
}

function selectResult(result: google.maps.places.AutocompletePrediction) {
    address.value = result.description
    autocompleteResults.value = []
    place_id.value = result.place_id || ""
}

const requiredRule = [(v: any) => !!v || t('required_field')];

const address = ref('');
const description = ref('');
const minimumDaysNotice = ref<number>(1); // Set default value as 1 or adjust as needed
const selectedFeatures = ref<boolean[]>(new Array().fill(false)); // Set default value as empty array or adjust as needed
const autocompleteResults = ref<google.maps.places.AutocompletePrediction[]>([]);

async function saveBed() {
    if (inputIsInvalid.value)
        return;

    const selectedFeaturesToSave: Feature[] = selectedFeatures.value.reduce((acc: Feature[], curr: boolean, index: number) => {
        if (curr) {
            acc.push(index as unknown as Feature); // Convert to Feature enum type
        }
        return acc;
    }, []);
    const serializedImages = await useSerializeImages(images.value)
    const coordinates = await useFetchCoordinates(place_id.value);
    const newBed: BedMutableInfo = {
        address: address.value,
        coordinates,
        description: description.value,
        minimumDaysNotice: Number(minimumDaysNotice.value),
        features: selectedFeaturesToSave,
        images: serializedImages.reduce((acc: Uint8Array[], curr: ProfilePic) => {
            if (curr.image !== undefined)
                acc.push(curr.image);
            return acc;
        }, [])
    };
    // Perform save or API call with newBed data
    try {
        await (await grpcStore.getAuthOnlyServiceClient()).addBed(newBed);
    }
    catch (err) {
        displayError(err, Errors.AddBedError);
        return;
    }
    displaySuccess(Successes.AddBedSuccess)
    navigateTo('/my-beds')
    address.value = '';
    description.value = '';
    minimumDaysNotice.value = 1;
    selectedFeatures.value = new Array().fill(false);
}
</script>
  