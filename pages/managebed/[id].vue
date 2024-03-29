<template>
    <v-container v-if="bed !== undefined && imgs !== undefined">
        <v-dialog v-model="showAddBookingAvailabilityOverlay" width="400">
            <v-card>
                <v-card-title>{{ $t('add_booking_availability') }}</v-card-title>
                <v-card-text>
                    {{ $t('dates_disabled_message') }}
                </v-card-text>
                <v-card-text>
                    <DateIntervalPicker @dates-chosen="(newRange: Range) => range = newRange"
                        :disabled-dates="availableDatesToBook">
                    </DateIntervalPicker>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="showAddBookingAvailabilityOverlay = false">{{ $t('cancel') }}</v-btn>
                    <v-btn color="rgb(59, 130, 246)" @click="addBookingAvailability">{{ $t('confirm') }}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="showRemoveBookingAvailabilityOverlay" width="400">
            <v-card>
                <v-card-title>{{ $t('remove_booking_availability') }}</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col @click="toggleToDelete(index)" cols="12" v-for="(pair, index) in pairs "
                            :class="{ 'to-be-deleted': (pair[1].value) }" style="cursor: pointer;" :key="index">
                            <div class="pair-container">
                                {{ pair[0] }}
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="showRemoveBookingAvailabilityOverlay = false">{{ $t('cancel') }}</v-btn>
                    <v-btn color="rgb(59, 130, 246)" @click="deleteBookingAvailability">{{ $t('confirm') }}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-card class="card" v-if="bed !== undefined && imgs !== undefined">
            <v-toolbar>
                <v-toolbar-title>{{ $t('modify_bed') }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <template v-slot:append>
                    <v-menu offset="5">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" icon>
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item @click="showAddBookingAvailabilityOverlay = !showAddBookingAvailabilityOverlay">
                                <v-icon>mdi-calendar-plus</v-icon>
                                <v-list-item-title>{{ $t('add_booking_availability') }}</v-list-item-title>
                            </v-list-item>
                            <v-list-item
                                @click="showRemoveBookingAvailabilityOverlay = !showRemoveBookingAvailabilityOverlay; populatePairs()">
                                <v-icon>mdi-calendar-remove</v-icon>
                                <v-list-item-title>{{ $t('remove_booking_availability') }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
            </v-toolbar>
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
                    <v-list-item-title class="title">{{ $t('date_availables') }}</v-list-item-title>
                    <AvailableDates :date-availables="availableDatesToBook"></AvailableDates>
                </v-list-item>
            </v-list>
        </v-card>
        <v-card class="card" v-else>
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-card>
    </v-container>
    <NoBedsFound v-else></NoBedsFound>
</template>
  
<script setup lang="ts">
import { Bed, BedId } from "composables/grpc_gen/common-messages";
import { Range } from '~~/components/DateIntervalPicker.vue';
import { Date as GrpcDate } from "composables/grpc_gen/common-messages";
import { useMessageStore } from "~/composables/storeUtils/userMessageStore";
const { currentRoute } = useRouter();
const { displayError, displaySuccess } = useMessageStore();


const grpcStore = useGrpcStore();
const bedId = currentRoute.value.params.id;
const bed = ref<Bed | undefined>(undefined);
bed.value = await useFetchSingleBed({ bedId: bedId as string } as BedId)
const imgs = await useDeserializeImages(bed.value?.bedMutableInfo?.images as Uint8Array[]);
const emitDates = ref(false);
const showAddBookingAvailabilityOverlay = ref(false);
const showRemoveBookingAvailabilityOverlay = ref(false);
const range = ref<Range | undefined>(undefined);

const availableDatesToBook = computed(() =>
    (bed.value?.dateAvailables.map(dt => grpcDateToDate(dt))))

async function addBookingAvailability() {
    emitDates.value = false;
    if (range.value !== undefined) {
        emitDates.value = false;
        showAddBookingAvailabilityOverlay.value = false;
        try {
            await (await grpcStore.getAuthOnlyServiceClient()).addBookingAvailability({
                bedId: { bedId: bedId as string },
                dateInterval: {
                    startDate: dateToGrpcDate(range.value.start),
                    endDate: dateToGrpcDate(range.value.end)
                }
            });
        } catch (e) {
            displayError(e, Errors.BookingAvailabilityAddingError);
            return;
        }
        const new_bed = await useFetchSingleBed({ bedId: bedId as string } as BedId)
        if (bed.value === undefined)
            return;
        bed.value.dateAvailables = new_bed.dateAvailables;
        populatePairs();
        displaySuccess(Successes.BookingAvailabilityAddingSuccess);
    }
}

function deleteBookingAvailability() {
    pairs.value.forEach(async (pair) => {
        const stringToGrpcDate = (date: string): GrpcDate => {
            const [day, month, year] = date.split('/');
            return { day: parseInt(day), month: parseInt(month), year: parseInt(year) };
        }
        if (pair[1].value) {
            showRemoveBookingAvailabilityOverlay.value = false;
            try {
                await (await grpcStore.getAuthOnlyServiceClient()).removeBookAvailability({
                    bedId: { bedId: bedId as string },
                    dateInterval: {
                        startDate: stringToGrpcDate(pair[0].split('-')[0]),
                        endDate: stringToGrpcDate(pair[0].split('-')[1])
                    }
                });
            } catch (e) {
                displayError(e, Errors.BookingAvailabilityDeletingError);
                return;
            }
            bed.value = await useFetchSingleBed({ bedId: bedId as string } as BedId)
            populatePairs();
            displaySuccess(Successes.BookingAvailabilityDeletingSuccess);
        }
    });
}

function toggleToDelete(index: number) {
    pairs.value[index][1].value = !pairs.value[index][1].value;
}


// Sort dates in ascending order


// Split dates into pairs of start and end dates
const pairs = ref<[string, Ref<boolean>][]>([]);
const populatePairs = () => {
    const sortedDates = bed.value?.dateAvailables.slice(0);
    sortedDates?.sort();
    if (sortedDates === undefined) return;
    const formatDate = (date: GrpcDate) => `${date.day}/${date.month}/${date.year}`;
    let start = sortedDates[0];
    let end = sortedDates[0];
    pairs.value = [];
    for (let i = 1; i < sortedDates.length; i++) {
        const currentDate = sortedDates[i];
        const prevDate = sortedDates[i - 1];

        const current = grpcDateToDate(currentDate);
        const prev = grpcDateToDate(prevDate);
        const diffTime = Math.abs(current.getTime() - prev.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 1) {
            // Push the previous pair when there is a gap in dates
            pairs.value.push([`${formatDate(start)}-${formatDate(end)}`, ref(false)]);
            start = currentDate;
        }
        end = currentDate;
    }
    if (start !== end)
        pairs.value.push([`${formatDate(start)}-${formatDate(end)}`, ref(false)]);
}

</script>
  
<style scoped>
.card {
    /* Original card styles */
}

.title {
    padding-top: 0;
    /* Original title styles */
}

.subtitle {
    /* Original subtitle styles */
}

.v-row {
    margin: 0;
}

.to-be-deleted {
    background-color: #ffcccc;
    /* Customize the background color to indicate deletion */
}

.v-col {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;

}
</style>
  