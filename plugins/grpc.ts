import { AuthOnlyServiceClient } from "./grpc-gen/Auth-only-serviceServiceClientPb"
export default defineNuxtPlugin(() => {
    return {
        provide: {
            AuthOnlyServiceClient
        }
    }
})