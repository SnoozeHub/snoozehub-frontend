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
      //if we encountered an authentication error, we need to log the user out an redirect them to the login page
      if (authenticationErrors.includes(error.message)) {
        const sessionStore = useSessionStore();
        sessionStore.logout();
        navigateTo("/eth-authentication");
      }

      const errorMessage = error?.message;
      this.errorSet.add([errorType, errorMessage]);
    },
    displaySuccess(successMessage: Successes) {
      this.successSet.add(successMessage);
    },
  },
});
