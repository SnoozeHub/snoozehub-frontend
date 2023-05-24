import { defineStore } from "pinia";
import { Bed } from "../grpc_gen/common-messages";
import { useMessageStore } from "./userMessageStore";
import { GetBedsRequest } from "../grpc_gen/public-service";

export const useCacheStore = defineStore("cacheStore", {
  state: () => ({
    bedsList: [] as Bed[],
  }),
  getters: {
    getBedsList: (state) => state.bedsList,
  },
  actions: {
    async retrieveDefaultBedsList() {
      this.bedsList = await useFetchBeds(
        new Date(new Date().setFullYear(2024)),
        useTomorrowDate(),
        { latitude: 46.06698, longitude: 11.15503 },
        [],
        0
      );
    },
    setBedsList(bedsList: Bed[]) {
      this.bedsList = bedsList;
    },
  },
});
