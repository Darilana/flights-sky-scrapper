export interface SearchFlightsParams {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId: string;
  destinationEntityId: string;
  date: string; // e.g., 2024-12-30
  cabinClass?: string; // e.g., "economy"
  adults?: number; // Representing number of adults as a string
  sortBy?: string; // e.g., "best"
  currency?: string; // e.g., "USD"
  market?: string; // e.g., "en-US"
  countryCode?: string; // e.g., "US"
  returnDate?: string;
}
