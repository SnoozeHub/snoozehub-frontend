import { Loader } from "@googlemaps/js-api-loader";
import { useI18n } from "vue-i18n";

export function useInitGoogleApis() {
  const sessionStore = useSessionStore();

  const env = useRuntimeConfig();
  const loader = new Loader({
    apiKey: env.public.googleMapsApiKey,
    language: useI18n().locale.value,
    version: "weekly",
    libraries: ["places", "geometry"],
  });
  loader.load().then(async (google) => {
    const { AutocompleteService } = (await google.maps.importLibrary(
      "places"
    )) as google.maps.PlacesLibrary;
    const { Geocoder } = (await google.maps.importLibrary(
      "geocoding"
    )) as google.maps.GeocodingLibrary;
    sessionStore.autocompleteService = new AutocompleteService();
    sessionStore.geocoderService = new Geocoder();
  });
}

let lastCallTime = 0;
let lastResults = null as google.maps.places.AutocompletePrediction[] | null;

export async function useFetchCompletion(
  query: string
): Promise<google.maps.places.AutocompletePrediction[]> {
  const now = Date.now();
  if (now - lastCallTime < 300 && lastResults) {
    return Promise.resolve(lastResults);
  } else {
    lastCallTime = now;
    const sessionStore = useSessionStore();
    const autocompleteService = sessionStore.autocompleteService;
    if (!query || !autocompleteService) {
      return [];
    }

    const request = {
      input: query,
    };

    return (
      await autocompleteService.getPlacePredictions(request)
    ).predictions.slice(0, 5);
  }
}

export async function useFetchCoordinates(
  placeId: string
): Promise<google.maps.LatLng> {
  const sessionStore = useSessionStore();
  const geocoderService = sessionStore.geocoderService;
  if (!geocoderService) {
    return Promise.resolve(new google.maps.LatLng(-34, 151));
  }
  const request = {
    placeId: placeId.toString(),
  };
  const response = await geocoderService.geocode(request);
  return response.results[0].geometry.location;
}
