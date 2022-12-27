import { GetBedsRequest } from "./grpc_gen/public-service";

export async function fetchBeds() {
  const getBedRequest: GetBedsRequest = {
    dateRangeLow: { day: 1, month: 1, year: 2022 },
    dateRangeHigh: { day: 1, month: 1, year: 2023 },
    place: "Trento",
    featuresMandatory: {
      internetConnection: false,
      bathroom: true,
      heating: false,
      airConditioner: true,
      electricalOutlet: true,
      tap: false,
      bedLinens: false,
      pillows: false,
    },
    fromIndex: 12,
  };
  return getBedRequest;
}
