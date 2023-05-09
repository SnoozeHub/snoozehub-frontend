import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { defineStore } from "pinia";
import { AuthOnlyServiceClient } from "../grpc_gen/auth-only-service.client";
import { PublicServiceClient } from "../grpc_gen/public-service.client";

export const useGrpcStore = defineStore("grpcStore", {
  state: () => ({
    grpcWebProxyURL: "http://localhost:3010",
    webFetchTransportIsInitiated: false,
    publicServiceClientIsInitiated: false,
    authOnlyServiceClientIsInitiated: false,
    grpcWebFetchTransport: null as GrpcWebFetchTransport | null,
    publicServiceClient: null as PublicServiceClient | null,
    authOnlyServiceClient: null as AuthOnlyServiceClient | null,
  }),
  getters: {
    getGrpcWebFetchTransport: (state) => state.grpcWebFetchTransport,
    getPublicServiceClient: (state) => state.publicServiceClient,
    getAuthOnlyServiceClient: (state) => state.authOnlyServiceClient,
  },
  actions: {
    initWebFetchTransport() {
      if (!this.webFetchTransportIsInitiated) {
        this.grpcWebFetchTransport = new GrpcWebFetchTransport({
          baseUrl: this.grpcWebProxyURL,
        });
        this.webFetchTransportIsInitiated = true;
      }
    },
    initPublicServiceClient() {
      if (!this.publicServiceClientIsInitiated) {
        if (!this.webFetchTransportIsInitiated) this.initWebFetchTransport();

        this.publicServiceClient = new PublicServiceClient(
          this.getGrpcWebFetchTransport as GrpcWebFetchTransport
        );
        this.publicServiceClientIsInitiated = true;
      }
    },
    initAuthOnlyServiceClient() {
      if (!this.authOnlyServiceClientIsInitiated) {
        if (!this.webFetchTransportIsInitiated) this.initWebFetchTransport();

        this.authOnlyServiceClient = new AuthOnlyServiceClient(
          this.getGrpcWebFetchTransport as GrpcWebFetchTransport
        );
        this.authOnlyServiceClientIsInitiated = true;
      }
    },
  },
});
