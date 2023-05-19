import { defineStore } from "pinia";
import { Bed } from "../grpc_gen/common-messages";

export const useCacheStore = defineStore("cacheStore", {
  state: () => ({
    bedsList: undefined as Bed[] | undefined,
  }),
  getters: {
    getBedsList: (state) => state.bedsList,
  },
});
