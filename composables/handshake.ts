import detectEthereumProvider from "@metamask/detect-provider";
import { Buffer } from "buffer";
import { PublicServiceClient } from "./grpc_gen/public-service.client";
import { Empty } from "./grpc_gen/common-messages";
import { AuthRequest } from "./grpc_gen/public-service";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
const URL = "http://localhost:3000";
export async function init_handshake() {
  const transport = new GrpcWebFetchTransport({
    baseUrl: URL,
  });

  const provider = await detectEthereumProvider();
  if (!provider) throw new Error("No web3 browser available");

  let public_service_client = new PublicServiceClient(transport);
  const nonce = await public_service_client.getNonce(Empty);
  const accounts = await ethereum.request({
    method: "eth_requestAccounts",
  }); // initialize your app
  const from = accounts[0];
  const msg = `0x${Buffer.from(nonce?.response.nonce, "utf8").toString("hex")}`;
  const sign = await ethereum.request({
    method: "personal_sign",
    params: [msg, from, "brbrbrbbr"],
  });
  console.log(sign);
  const auth_request: AuthRequest = {
    nonce: "idk",
    signedNonce: "idk",
    registeredUser: false,
  };
  let outcome = public_service_client.auth(auth_request);
}
