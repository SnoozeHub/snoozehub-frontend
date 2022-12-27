import { InjectionKey, Ref } from "vue";
import { AuthOnlyServiceClient } from "./grpc_gen/auth-only-service.client";
import { PublicServiceClient } from "./grpc_gen/public-service.client";

export interface UserIsAuthenticated {
  userIsAuthenticated: Ref<boolean>;
  updateUserIsAuthenticated: (value: boolean) => void;
}

export const userIsAuthenticatedKey =
  Symbol() as InjectionKey<UserIsAuthenticated>;
export const isWeb3CapableBrowserKey = Symbol() as InjectionKey<boolean>;
export const publicServiceClientKey =
  Symbol() as InjectionKey<PublicServiceClient>;
export const authOnlyServiceClientKey =
  Symbol() as InjectionKey<AuthOnlyServiceClient>;
