import { Flight } from "@/app/types/Flight";

export interface SearchFlightsResponse {
  data: {
    itineraries: Flight[];
  };
}
