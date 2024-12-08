export interface Airport {
  presentation: Presentation;
  navigation: Navigation;
  skyId: string;
  entityId: string;
}

interface Presentation {
  title: string;
  suggestionTitle: string;
  subtitle: string;
}

interface Navigation {
  entityId: string;
  entityType: string;
  localizedName: string;
  relevantFlightParams: RelevantParams;
  relevantHotelParams: RelevantParams;
}

interface RelevantParams {
  skyId?: string;
  entityId: string;
  flightPlaceType?: string;
  entityType?: string;
  localizedName: string;
}
