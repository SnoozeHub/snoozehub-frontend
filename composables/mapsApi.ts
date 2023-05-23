import { Loader } from "@googlemaps/js-api-loader";
import { useI18n } from "vue-i18n";
import { usegmapsStore } from "./storeUtils/gMapsStore";
import { Coordinates } from "./grpc_gen/common-messages";

export function useInitGoogleApis() {
  const gmapsStore = usegmapsStore();

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
    gmapsStore.autocompleteService = new AutocompleteService();
    gmapsStore.geocoderService = new Geocoder();
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
    const gmapsStore = usegmapsStore();
    const autocompleteService = gmapsStore.autocompleteService;
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
): Promise<Coordinates> {
  const gmapsStore = usegmapsStore();
  const geocoderService = gmapsStore.getGeocoderService;
  if (!geocoderService) {
    return Promise.resolve({ latitude: 0, longitude: 0 });
  }
  const request = {
    placeId: placeId.toString(),
  };
  const response = await geocoderService.geocode(request);
  const googleCoordinates = response.results[0].geometry.location;
  return {
    latitude: googleCoordinates.lat(),
    longitude: googleCoordinates.lng(),
  };
}
