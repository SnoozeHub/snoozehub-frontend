<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" sm="8" md="6">
                <v-card>
                    <v-card-title class="text-center">
                        {{ $t('add_bed') }}
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="saveBed">
                            <v-text-field v-model="address" :label="$t('address')" required></v-text-field>
                            <v-textarea v-model="description" :label="$t('description')" required></v-textarea>
                            <v-text-field v-model="minimumDaysNotice" :label="$t('minimum_days_notice')"
                                required></v-text-field>
                            <v-checkbox v-for="(feature) in  Object.keys(Feature).filter((v) => !isNaN(Number(v))) "
                                :key="feature" v-model="selectedFeatures[feature as unknown as number]"
                                :label="$t(featureToi18nString(feature as unknown as number))"></v-checkbox>
                            <!-- Add other fields and form inputs for BedMutableInfo -->
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
import { Bed, Feature } from '~/composables/grpc_gen/common-messages';

function featureToi18nString(featureStr: number): string {
    const featuresMap: Record<Feature, string> = {
        [Feature.internetConnection]: 'internet_connection',
        [Feature.bathroom]: 'bathroom',
        [Feature.heating]: 'heating',
        [Feature.airConditioner]: 'air_conditioner',
        [Feature.electricalOutlet]: 'electrical_outlet',
        [Feature.tap]: 'tap',
        [Feature.bedLinens]: 'bed_linens',
        [Feature.pillows]: 'pillows'
    };
    const feature = featureStr as unknown as Feature; // Convert to Feature enum type
    return featuresMap[feature];
}


const address = ref('');
const description = ref('');
const minimumDaysNotice = ref(1); // Set default value as 1 or adjust as needed
const selectedFeatures = ref<boolean[]>(new Array().fill(false)); // Set default value as empty array or adjust as needed

function saveBed() {
    const selectedFeaturesToSave: Feature[] = selectedFeatures.value.reduce((acc: Feature[], curr: boolean, index: number) => {
        if (curr) {
            acc.push(index as unknown as Feature); // Convert to Feature enum type
        }
        return acc;
    }, []);
    const newBed: Bed = {
        hostPublicKey: '',
        hostTelegramUsername: '',
        dateAvailables: [], // Set default value as empty array or adjust as needed
        reviewCount: 0, // Set default value as 0 or adjust as needed
        bedMutableInfo: {
            address: address.value,
            description: description.value,
            minimumDaysNotice: minimumDaysNotice.value,
            features: selectedFeaturesToSave,
            images: [], // Set default value as empty array or adjust as needed
            // Populate other fields of BedMutableInfo based on the form inputs
        },
    };
    console.log(newBed);
    // Perform save or API call with newBed data

    // Reset form fields
    address.value = '';
    description.value = '';
    minimumDaysNotice.value = 1;
}
</script>
  