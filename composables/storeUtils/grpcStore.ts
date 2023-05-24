import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { defineStore } from "pinia";
import { AuthOnlyServiceClient } from "../grpc_gen/auth-only-service.client";
import { PublicServiceClient } from "../grpc_gen/public-service.client";

export const useGrpcStore = defineStore("grpcStore", {
  state: () => ({
    grpcWebProxyURL: "",
    publicWebFetchTransportIsInitiated: false,
    publicServiceClientIsInitiated: false,
    publicWebFetchTransport: null as GrpcWebFetchTransport | null,
    publicServiceClient: null as PublicServiceClient | null,
    authOnlyWebFetchTransportIsInitiated: false,
    authOnlyServiceClientIsInitiated: false,
    authOnlyWebFetchTransport: null as GrpcWebFetchTransport | null,
    authOnlyServiceClient: null as AuthOnlyServiceClient | null,
  }),
  getters: {
    getPublicWebFetchTransport: (state) => state.publicWebFetchTransport,
    getAuthOnlyWebFetchTransport: (state) => state.authOnlyWebFetchTransport,
  },
  actions: {
    getPublicServiceClient() {
      return new Promise<PublicServiceClient>(async (resolve, __) => {
        if (this.publicServiceClientIsInitiated) {
          resolve(this.publicServiceClient as PublicServiceClient);
        } else {
          this.initPublicServiceClient();
          resolve(this.publicServiceClient as PublicServiceClient);
        }
      });
    },
    getAuthOnlyServiceClient() {
      return new Promise<AuthOnlyServiceClient>(async (resolve, __) => {
        if (this.authOnlyServiceClientIsInitiated) {
          resolve(this.authOnlyServiceClient as AuthOnlyServiceClient);
        } else {
          this.initAuthOnlyServiceClient();
          resolve(this.authOnlyServiceClient as AuthOnlyServiceClient);
        }
      });
    },
    initGrpcWebProxyUrl() {
      if (this.grpcWebProxyURL != "") return;
      const runtimeConfig = useRuntimeConfig();
      this.grpcWebProxyURL =
        runtimeConfig.public.domainName || "https://localhost/";
    },
    initPublicWebFetchTransport() {
      this.initGrpcWebProxyUrl();
      if (!this.publicWebFetchTransportIsInitiated) {
        this.publicWebFetchTransport = new GrpcWebFetchTransport({
          baseUrl: this.grpcWebProxyURL,
        });
        this.publicWebFetchTransportIsInitiated = true;
      }
    },
    initAuthOnlyWebFetchTransport() {
      this.initGrpcWebProxyUrl();
      if (!this.authOnlyWebFetchTransportIsInitiated) {
        const sessionStore = useSessionStore();
        this.authOnlyWebFetchTransport = new GrpcWebFetchTransport({
          baseUrl: this.grpcWebProxyURL,
          meta: {
            authtoken: sessionStore.getAuthToken,
          },
        });
        this.authOnlyWebFetchTransportIsInitiated = true;
      }
    },
    initPublicServiceClient() {
      if (!this.publicServiceClientIsInitiated) {
        if (!this.publicWebFetchTransportIsInitiated)
          this.initPublicWebFetchTransport();

        this.publicServiceClient = new PublicServiceClient(
          this.getPublicWebFetchTransport as GrpcWebFetchTransport
        );
        this.publicServiceClientIsInitiated = true;
      }
    },
    initAuthOnlyServiceClient() {
      if (!this.authOnlyServiceClientIsInitiated) {
        if (!this.authOnlyWebFetchTransportIsInitiated)
          this.initAuthOnlyWebFetchTransport();

        this.authOnlyServiceClient = new AuthOnlyServiceClient(
          this.authOnlyWebFetchTransport as GrpcWebFetchTransport
        );
        this.authOnlyServiceClientIsInitiated = true;
      }
    },
  },
});
