import { defineStore } from "pinia";
import { AuthResponse } from "../grpc_gen/public-service";
import { Languages } from "../languageUtils";
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
    autocompleteService: null as google.maps.places.AutocompleteService | null,
    geocoderService: null as google.maps.Geocoder | null,
    isWeb3CapableBrowser: false,
    userIsAuthenticated: false,
    settings: { darkTheme: true, language: Languages.EN },
    authToken: "",
  }),
  getters: {
    getTheme: (state) => (state.settings.darkTheme ? "dark" : "light"),
    getLanguage: (state) => state.settings.language,
    getAutocompleteService: (state) => state.autocompleteService,
    getIsWeb3CapableBrowser: (state) => state.isWeb3CapableBrowser,
    getUserIsAuthenticated: (state) => state.userIsAuthenticated,
    getSettings: (state) => state.settings,
    getDarkTheme: (state) => state.settings.darkTheme,
  },
  actions: {
    setUserIsAuthenticated(authResponse: AuthResponse): void {
      this.userIsAuthenticated = authResponse.accountExist;
      if (this.userIsAuthenticated && authResponse.authToken) {
        this.authToken = authResponse.authToken;
      }
    },
    setIsWeb3CapableBrowser(isWeb3CapableBrowser: boolean): void {
      this.isWeb3CapableBrowser = isWeb3CapableBrowser;
    },
    saveSession(): void {
      localStorage.setItem(
        "userIsAuthenticated",
        this.userIsAuthenticated.toString()
      );
      localStorage.setItem("authToken", this.authToken);
      localStorage.setItem("settings", JSON.stringify(this.settings));
    },
    setSettings(settings: Settings): void {
      this.settings = settings;
    },
    setTheme(darkTheme: boolean): void {
      this.settings.darkTheme = darkTheme;
    },
    toggleLanguage(): void {
      this.settings.language =
        this.settings.language == Languages.EN ? Languages.IT : Languages.EN;
    },
    restorePreviousSession() {
      //restores user preferences from local storage
      const settingsJSON = localStorage.getItem("settings");

      if (settingsJSON != "null") {
        const settings = JSON.parse(settingsJSON as string) as Settings;
        this.setSettings(settings);
      }
      //restores user authentication from local storage
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
