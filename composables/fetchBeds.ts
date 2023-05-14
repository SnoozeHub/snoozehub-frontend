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
    dateRangeHigh: {
      day: dateRangeHigh.getDay(),
      month: dateRangeHigh.getMonth(),
      year: dateRangeHigh.getFullYear(),
    } as GrpcDate,
    dateRangeLow: {
      day: dateRangeLow.getDay(),
      month: dateRangeLow.getMonth(),
      year: dateRangeLow.getFullYear(),
    } as GrpcDate,
    coordinates: { latitude: coords.lat(), longitude: coords.lng() },
    featuresMandatory,
    fromIndex,
  };
  const publicServiceClient = grpcState.getPublicServiceClient;
  const getBedsRequest = await publicServiceClient?.getBeds(getBedRequest);
  console.log(getBedsRequest?.requestHeaders);
  return getBedsRequest?.response.beds;
}
