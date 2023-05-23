import { Buffer } from "buffer";
import { PublicServiceClient } from "./grpc_gen/public-service.client";
import { Empty } from "./grpc_gen/common-messages";
import { AuthRequest } from "./grpc_gen/public-service";

import { useGrpcStore } from "./storeExport";

export async function useInitHandshake() {
  const grpcStore = useGrpcStore();
  const sessionStore = useSessionStore();
  grpcStore.initPublicServiceClient();

  const publicServiceClient =
    grpcStore.getPublicServiceClient as PublicServiceClient;

  const nonceRequest = await publicServiceClient.getNonce(Empty);
  const nonce = nonceRequest?.response.nonce;

  const accounts = await ethereum.request({
    method: "eth_requestAccounts",
  });
  const from = accounts[0];
  const signedNonce = await ethereum.request({
    method: "personal_sign",
    params: [nonce, from, "brbrbrbbr"],
  });

  const byteArray = Buffer.from(signedNonce.slice(2), "hex");
  const hexSignedNonce = new Uint8Array(byteArray);

  const auth_request: AuthRequest = {
    nonce,
    signedNonce: hexSignedNonce,
  };
  const authOutcome = await publicServiceClient.auth(auth_request);
  // console.log("authOutcome", authOutcome);
  const authenticationOutcome = authOutcome?.response;
  sessionStore.parseAuthResponse(authenticationOutcome);
  grpcStore.initAuthOnlyServiceClient();
  return authenticationOutcome;
}
