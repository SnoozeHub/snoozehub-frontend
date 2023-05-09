import { Feature } from "./grpc_gen/common-messages";
import { GetBedsRequest } from "./grpc_gen/public-service";
import { useGrpcStore } from "./storeExport";
import { Date } from "./grpc_gen/common-messages";

export async function useFetchBeds() {
  const grpcState = useGrpcStore();
  // const sessionStore = useSessionStore();

  const getBedRequest: GetBedsRequest = {
    dateRangeHigh: { day: 1, month: 10, year: 2023 } as Date,
    dateRangeLow: { day: 1, month: 7, year: 2023 } as Date,
    coordinates: { latitude: 0, longitude: 0 },
    featuresMandatory: [
      Feature.internetConnection,
      Feature.bathroom,
      Feature.electricalOutlet,
    ],
    fromIndex: 12,
  };
  const publicServiceClient = grpcState.getPublicServiceClient;
  const getBedsRequest = await publicServiceClient?.getBeds(getBedRequest);
  console.log(getBedsRequest?.requestHeaders);
  return getBedsRequest?.response.beds;
}
