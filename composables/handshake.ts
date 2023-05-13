import { Buffer } from "buffer";
import { PublicServiceClient } from "./grpc_gen/public-service.client";
import { Empty } from "./grpc_gen/common-messages";
import { AuthRequest } from "./grpc_gen/public-service";

import { useGrpcStore } from "./storeExport";

export async function useInitHandshake() {
  const grpcState = useGrpcStore();
  grpcState.initPublicServiceClient();

  const publicServiceClient =
    grpcState.getPublicServiceClient as PublicServiceClient;

  const nonceRequest = await publicServiceClient.getNonce(Empty);
  const nonce = nonceRequest?.response.nonce;

  const accounts = await ethereum.request({
    method: "eth_requestAccounts",
  });
  const from = accounts[0];
  const msg = `0x${Buffer.from(nonce, "utf8").toString("hex")}`;
  const signedNonce = await ethereum.request({
    method: "personal_sign",
    params: [msg, from, "brbrbrbbr"],
  });
  console.log("signedNonce", typeof signedNonce, signedNonce);
  const auth_request: AuthRequest = {
    nonce,
    signedNonce: Uint8Array.from(signedNonce),
  };
  console.log("auth_request", auth_request);
  const authOutcome = await publicServiceClient.auth(auth_request);
  console.log("authOutcome", authOutcome);
  return authOutcome?.response;
}
