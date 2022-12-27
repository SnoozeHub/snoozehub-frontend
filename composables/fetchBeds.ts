import { GetBedsRequest } from "./grpc_gen/public-service";
import { useGrpcStore } from "./storeExport";

export async function useFetchBeds() {
  const grpcState = useGrpcStore();
  // const sessionStore = useSessionStore();

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
  const publicServiceClient = grpcState.getPublicServiceClient;
  const getBedsRequest = await publicServiceClient?.getBeds(getBedRequest);
  return getBedsRequest?.response.beds;
}
