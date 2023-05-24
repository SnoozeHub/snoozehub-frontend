import { defineStore } from "pinia";
import { Errors } from "../errors";
import { Successes } from "../successes";

export const useMessageStore = defineStore("useMessageStore", {
  state: () => ({
    errorSet: new Set<[Errors, string]>(),
    successSet: new Set<Successes>(),
  }),
  getters: {
    getErrorSet: (state) => state.errorSet,
    getSuccessSet: (state) => state.successSet,
  },
  actions: {
    displayError(error: any, errorType: Errors) {
      if (error.message == "invalid or expired authtoken") {
        const sessionStore = useSessionStore();
        sessionStore.logout();
      }

      const errorMessage = error?.message;
      this.errorSet.add([errorType, errorMessage]);
    },
    displaySuccess(successMessage: Successes) {
      this.successSet.add(successMessage);
    },
  },
});
