import detectEthereumProvider from "@metamask/detect-provider";
import { Buffer } from "buffer";
import { PublicServiceClient } from "./grpc_gen/public-service.client";
import { Empty } from "./grpc_gen/common-messages";
import { AuthRequest } from "./grpc_gen/public-service";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

const URL = "http://localhost:8080";

export async function init_handshake() {
  const transport = new GrpcWebFetchTransport({
    baseUrl: URL,
  });

  const provider = await detectEthereumProvider();
  if (!provider) throw new Error("No web3 browser available");

  const public_service_client = new PublicServiceClient(transport);
  const nonceRequest = await public_service_client.getNonce(Empty);
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

  const auth_request: AuthRequest = {
    nonce: nonce,
    signedNonce: signedNonce,
  };
  const authOutcome = await public_service_client.auth(auth_request);
  return authOutcome?.response.accountExist;
}
