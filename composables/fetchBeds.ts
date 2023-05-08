import { Feature } from "./grpc_gen/common-messages";
import { GetBedsRequest } from "./grpc_gen/public-service";
import { useGrpcStore } from "./storeExport";

export async function useFetchBeds() {
  const grpcState = useGrpcStore();
  // const sessionStore = useSessionStore();

  const getBedRequest: GetBedsRequest = {
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
