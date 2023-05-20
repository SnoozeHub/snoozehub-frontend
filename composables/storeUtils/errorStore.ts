import { defineStore } from "pinia";
import { Errors } from "../errors";

export const useErrorsStore = defineStore("errorsStore", {
  state: () => ({
    errorSet: new Set<[Errors, string]>(),
  }),
  getters: {
    getErrorSet: (state) => state.errorSet,
  },
  actions: {
    displayError(error: any, errorType: Errors) {
      const errorMessage = error?.message;
      this.errorSet.add([errorType, errorMessage]);
    },
  },
});
