import { defineStore } from "pinia";

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
  state: () => {
    return {
      isWeb3CapableBrowser: false,
      userIsAuthenticated: false,
      settings: { darkTheme: true, language: Languages.EN },
    };
  },
  getters: {
    getIsWeb3CapableBrowser: (state) => state.isWeb3CapableBrowser,
    getUserIsAuthenticated: (state) => state.userIsAuthenticated,
    getSettings: (state) => state.settings,
  },
  actions: {
    setUserIsAuthenticated(userIsAuthenticated: boolean): void {
      this.userIsAuthenticated = userIsAuthenticated;
    },
    setIsWeb3CapableBrowser(isWeb3CapableBrowser: boolean): void {
      this.isWeb3CapableBrowser = isWeb3CapableBrowser;
    },
    setSettings(settings: Settings): void {
      this.settings = settings;
      localStorage.setItem("settings", JSON.stringify(settings));
    },
    restoreLocalStoragePreferences() {
      const settingsJSON = localStorage.getItem("settings");
      if (!this.settings) return;
      const settings = JSON.parse(settingsJSON as string) as Settings;
      this.setSettings(settings);
    },
  },
});
