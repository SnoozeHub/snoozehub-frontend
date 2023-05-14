import { defineStore } from "pinia";
import { Bed } from "../grpc_gen/common-messages";

export const useCacheStore = defineStore("cacheStore", {
  state: () => ({
    bedsList: null as Bed[] | null,
  }),
  getters: {
    getBedsList: (state) => state.bedsList,
  },
});
