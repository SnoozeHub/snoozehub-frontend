import { Feature } from "./grpc_gen/common-messages";
import { GetBedsRequest } from "./grpc_gen/public-service";
import { useGrpcStore } from "./storeExport";
import { Date as GrpcDate } from "./grpc_gen/common-messages";

export async function useFetchBeds(
  dateRangeHigh: Date,
  dateRangeLow: Date,
  coords: google.maps.LatLng,
  featuresMandatory: Feature[],
  fromIndex: number
) {
  const grpcState = useGrpcStore();
  const getBedRequest: GetBedsRequest = {
    dateRangeHigh: dateToGrpcDate(dateRangeHigh),
    dateRangeLow: dateToGrpcDate(dateRangeLow),
    coordinates: { latitude: coords.lat(), longitude: coords.lng() },
    featuresMandatory,
    fromIndex,
  };
  const publicServiceClient = grpcState.getPublicServiceClient;
  const getBedsRequest = await publicServiceClient?.getBeds(getBedRequest);
  return getBedsRequest?.response.beds;
}

function dateToGrpcDate(date: Date): GrpcDate {
  return {
    day: date.getDay(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };
}
