import { defineStore } from "pinia";
import { AuthResponse } from "../grpc_gen/public-service";

export enum Languages {
  IT = "IT",
  EN = "EN",
}
export interface Settings {
  darkTheme: boolean;
  language: Languages;
}

export function enumFromStringValue<T>(
  enm: { [s: string]: T },
  value: string
): T | undefined {
  return (Object.values(enm) as unknown as string[]).includes(value)
    ? (value as unknown as T)
    : undefined;
}

export const useSessionStore = defineStore("sessionStore", {
  state: () => ({
    isWeb3CapableBrowser: false,
    userIsAuthenticated: false,
    settings: { darkTheme: true, language: Languages.EN },
    authToken: "",
  }),
  getters: {
    getIsWeb3CapableBrowser: (state) => state.isWeb3CapableBrowser,
    getUserIsAuthenticated: (state) => state.userIsAuthenticated,
    getSettings: (state) => state.settings,
  },
  actions: {
    setUserIsAuthenticated(authResponse: AuthResponse): void {
      this.userIsAuthenticated = authResponse.accountExist;
      if (this.userIsAuthenticated && authResponse.authToken) {
        this.authToken = authResponse.authToken;
        localStorage.setItem("authToken", this.authToken);
      }
    },
    setIsWeb3CapableBrowser(isWeb3CapableBrowser: boolean): void {
      this.isWeb3CapableBrowser = isWeb3CapableBrowser;
    },
    saveSettings(): void {
      localStorage.setItem("settings", JSON.stringify(this.settings));
    },
    setSettings(settings: Settings): void {
      this.settings = settings;
    },
    setTheme(darkTheme: boolean): void {
      this.settings.darkTheme = darkTheme;
    },
    restoreLocalStoragePreferences() {
      const settingsJSON = localStorage.getItem("settings");
      if (!this.settings) return;
      const settings = JSON.parse(settingsJSON as string) as Settings;
      this.setSettings(settings);
    },
    restorePreviousSession() {
      this.userIsAuthenticated = new Boolean(
        localStorage.getItem("userIsAuthenticated")
      ) as boolean;
      if (this.getUserIsAuthenticated) {
        this.authToken = localStorage.getItem("authToken") as string;
      }
    },
    logout() {
      this.userIsAuthenticated = false;
      this.authToken = "";
      localStorage.removeItem("authToken");
      localStorage.removeItem("userIsAuthenticated");
    },
  },
});
