export interface LatLng {
  lat: number;
  lng: number;
}

export interface Viewport {
  ne: LatLng;
  sw: LatLng;
}

export interface Cursor {
  totalCount: number;
  nextPage: string;
  previousPage?: string;
}

export interface SearchRegion {
  id: number;
  name: string;
  level: number;
  availability?: any;
  marketingCampaignId: number;
  bookedPercentage?: any;
  totalNumberOfOffers: number;
}

export interface Performance {
  legacyTimeServerSearch: number;
  timeServerSearch: number;
}

export interface MetaData {
  viewport: Viewport;
  cursor: Cursor;
  pathname: string;
  searchRegion: SearchRegion;
  searchId: string;
  performance: Performance;
  listTitle: string;
  esQuery?: any;
  hasHistoryImpression: boolean;
  searchUrl: string;
}

export interface OfferMetaData {
  searchSource: string;
  searchType?: any;
  impressionType: string;
}

export interface Provider {
  id: string;
  logoUrl: string;
  legalName: string;
  shortName: string;
  statistics?: any;
}

export interface Price {
  total: number;
  daily: number;
  strikeThroughTotal?: any;
  strikeThroughDaily?: any;
  isExact: boolean;
  currency: string;
  ccy: string;
  discountType?: any;
  discountAmount?: any;
  nights?: any;
}

export interface Usp {
  id: string;
  format: string;
  value: number;
  unit: string;
  group: string;
}

export interface Area {
  value: number;
  unit: string;
}

export interface Details {
  name: string;
  shortName: string[];
  apartmentTypeTitle: string;
  area: Area;
  bedroomsCount: number;
  guestsCount: number;
  apartmentType: string;
  longName?: any;
  bedTypes: string[];
}

export interface DistanceToSearchRegionCenter {
  id?: any;
  format: string;
  value: number;
  unit: string;
}

export interface Location {
  lat: number;
  lng: number;
  name: string;
  geoHash: string;
  distanceToSearchRegionCenter: DistanceToSearchRegionCenter;
}

export interface Photo {
  t: string;
  m: string;
  l: string;
  hr: string;
  overlay: boolean;
}

export interface Rating {
  count: number;
  value: number;
}

export interface FreeCancellation {
  untilDate?: any;
  daysBeforeArrival: number;
}

export interface CancellationPolicy {
  freeCancellation: FreeCancellation;
}

export interface Offer {
  metaData: OfferMetaData;
  id: string;
  isAvailable?: any;
  outboundLink: string;
  internalLink: string;
  provider: Provider;
  price: Price;
  usps: Usp[];
  groupId: string;
  isExpressBookable: boolean;
  isInstantBookable: boolean;
  routingType: string;
  details: Details;
  likes?: any;
  location: Location;
  photos: Photo[];
  rating: Rating;
  isCrosslink: boolean;
  cancellationPolicy: CancellationPolicy;
}

export interface OffersResponse {
  metaData: MetaData;
  offers: Offer[];
}
