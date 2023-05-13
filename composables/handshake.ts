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
  const signedNonce = await ethereum.request({
    method: "personal_sign",
    params: [nonce, from, "brbrbrbbr"],
  });
  console.log("signedNonce", typeof signedNonce, signedNonce);


// this is from chatpgpt
function hexToUint8Array(hexString: string): Uint8Array {
  const trimmedHex = hexString.startsWith("0x") ? hexString.slice(2) : hexString;
  const hexLength = trimmedHex.length;
  
  if (hexLength % 2 !== 0) {
    throw new Error("Invalid hexadecimal string: length must be even");
  }
  
  const byteLength = hexLength / 2;
  const uint8Array = new Uint8Array(byteLength);
  
  for (let i = 0; i < byteLength; i++) {
    const byteHex = trimmedHex.substr(i * 2, 2);
    const byteValue = parseInt(byteHex, 16);
    uint8Array[i] = byteValue;
  }
  
  return uint8Array;
}


  const auth_request: AuthRequest = {
    nonce,
    signedNonce: hexToUint8Array(signedNonce),
  };
  console.log("auth_request", auth_request);
  const authOutcome = await publicServiceClient.auth(auth_request);
  console.log("authOutcome", authOutcome);
  return authOutcome?.response;
}
