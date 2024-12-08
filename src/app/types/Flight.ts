interface Price {
  raw: number;
  formatted: string;
  pricingOptionId: string;
}

interface Location {
  id: string;
  entityId: string;
  name: string;
  displayCode: string;
  city: string;
  country: string;
  isHighlighted: boolean;
}

interface Carrier {
  id: number;
  alternateId: string;
  logoUrl: string;
  name: string;
}

interface Carriers {
  marketing: Carrier[];
  operationType: string;
}

interface ParentLocation {
  flightPlaceId: string;
  displayCode: string;
  name: string;
  type: string;
}

interface SegmentLocation {
  flightPlaceId: string;
  displayCode: string;
  parent: ParentLocation;
  name: string;
  type: string;
  country: string;
}

interface CarrierInfo {
  id: number;
  name: string;
  alternateId: string;
  allianceId: number;
  displayCode: string;
}

interface Segment {
  id: string;
  origin: SegmentLocation;
  destination: SegmentLocation;
  departure: string;
  arrival: string;
  durationInMinutes: number;
  flightNumber: string;
  marketingCarrier: CarrierInfo;
  operatingCarrier: CarrierInfo;
}

interface Leg {
  id: string;
  origin: Location;
  destination: Location;
  durationInMinutes: number;
  stopCount: number;
  isSmallestStops: boolean;
  departure: string;
  arrival: string;
  timeDeltaInDays: number;
  carriers: Carriers;
  segments: Segment[];
}

interface FarePolicy {
  isChangeAllowed: boolean;
  isPartiallyChangeable: boolean;
  isCancellationAllowed: boolean;
  isPartiallyRefundable: boolean;
}

export interface Flight {
  id: string;
  price: Price;
  legs: Leg[];
  isSelfTransfer: boolean;
  isProtectedSelfTransfer: boolean;
  farePolicy: FarePolicy;
  fareAttributes: Record<string, unknown>;
  tags: string[];
  isMashUp: boolean;
  hasFlexibleOptions: boolean;
  score: number;
}
