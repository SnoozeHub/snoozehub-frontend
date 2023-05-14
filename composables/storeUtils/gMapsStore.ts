import { defineStore } from "pinia";

export const usegmapsStore = defineStore("gmapsStore", {
  state: () => ({
    autocompleteService: null as google.maps.places.AutocompleteService | null,
    geocoderService: null as google.maps.Geocoder | null,
  }),
  getters: {
    getAutocompleteService: (state) => state.autocompleteService,
    getGeocoderService: (state) => state.geocoderService,
  },
});
