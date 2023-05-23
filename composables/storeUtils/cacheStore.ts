import { defineStore } from "pinia";
import { Bed } from "../grpc_gen/common-messages";

export const useCacheStore = defineStore("cacheStore", {
  state: () => ({
    bedsList: [] as Bed[],
  }),
  getters: {
    getBedsList: (state) => state.bedsList,
  },
  actions: {
    setBedsList(bedsList: Bed[]) {
      this.bedsList = bedsList;
    },
  },
});
