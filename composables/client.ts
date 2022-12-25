import { PublicServiceClient } from "./grpc_gen/public-service.client";
import { Empty } from "./grpc_gen/common-messages";
import { AuthRequest } from "./grpc_gen/public-service";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
const URL = "http://localhost:3000";

export function authenticate() {
  let transport = new GrpcWebFetchTransport({
    baseUrl: URL,
  });

  let public_service_client = new PublicServiceClient(transport);
  public_service_client.getNonce(Empty);
  const auth_request: AuthRequest = {
    nonce: "idk",
    signedNonce: "idk",
    registerNewUser: false,
  };
  public_service_client.auth(auth_request);
  // public_service_client.getNonce(null, null);
  // auth_request.setAddress("This is a test");
  // auth_request.setNoncesigned(new Uint8Array([1, 2, 3, 4]).toString());

  // public_service_lient.auth(auth_request, null);
  return auth_request.signedNonce
}
