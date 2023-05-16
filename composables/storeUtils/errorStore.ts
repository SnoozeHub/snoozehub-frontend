import { defineStore } from "pinia";
import { Errors } from "../errors";

export const useErrorsStore = defineStore("errorsStore", {
  state: () => ({
    errorMessage: "",
    errorSet: new Set<Errors>(),
  }),
  getters: {
    getErrorMessage: (state) => state.errorMessage,
    getErrorSet: (state) => state.errorSet,
  },
  actions: {
    setErrorMessage(message: string) {
      this.errorMessage = message;
    },
  },
});
