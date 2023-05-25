import {
  Bed,
  BedId,
  Coordinates,
  Empty,
  Feature,
} from "./grpc_gen/common-messages";
import { GetBedsRequest } from "./grpc_gen/public-service";
import { useGrpcStore } from "./storeExport";
import { useMessageStore } from "./storeUtils/userMessageStore";

export async function useFetchBeds(
  dateRangeHigh: Date,
  dateRangeLow: Date,
  coords: Coordinates,
  featuresMandatory: Feature[],
  fromIndex: number
) {
  const grpcState = useGrpcStore();
  const messageStore = useMessageStore();
  const getBedRequest: GetBedsRequest = {
    dateRangeHigh: dateToGrpcDate(dateRangeHigh),
    dateRangeLow: dateToGrpcDate(dateRangeLow),
    coordinates: coords,
    featuresMandatory,
    fromIndex,
  };
  const publicServiceClient = await grpcState.getPublicServiceClient();
  try {
    const getBedsRequest = await publicServiceClient?.getBeds(getBedRequest);
    if (
      getBedsRequest?.response == undefined ||
      getBedsRequest.response.beds.length == 0
    )
      throw new Error("no beds found");
    return getBedsRequest?.response.beds;
  } catch (e) {
    messageStore.displayError(e, Errors.NoBedsFound);
    return [];
  }
}

export async function useFetchMyBeds(): Promise<Bed[]> {
  const messageStore = useMessageStore();
  const grpcState = useGrpcStore();
  const authOnlyServiceClient = await grpcState.getAuthOnlyServiceClient();
  try {
    const getBedsRequest = await authOnlyServiceClient?.getMyBeds(Empty);
    return getBedsRequest?.response.beds as Bed[];
  } catch (e) {
    messageStore.displayError(e, Errors.GrpcError);
    return [];
  }
}

export async function useFetchSingleBed(bedId: BedId): Promise<Bed> {
  const messageStore = useMessageStore();
  const grpcState = useGrpcStore();
  const publicServiceClient = await grpcState.getPublicServiceClient();
  try {
    const getBedRequest = await publicServiceClient?.getBed(bedId);
    if (!getBedRequest) throw new Error("no bed found");
    console.log("getBedRequest", getBedRequest.response.bed);
    return getBedRequest?.response.bed as Bed;
  } catch (e) {
    messageStore.displayError(e, Errors.NoBedsFound);
    return {} as Bed;
  }
}
