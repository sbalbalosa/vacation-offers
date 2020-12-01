import { Offer as OfferResponse } from "../types";

export interface OfferEntity {
  id: OfferResponse["id"];
  name: OfferResponse["details"]["name"];
  apartmentType: OfferResponse["details"]["apartmentTypeTitle"];
  photos: OfferResponse["photos"];
  guestCount: OfferResponse["details"]["guestsCount"];
  totalCost: OfferResponse["price"]["total"];
  currency: OfferResponse["price"]["currency"];
  dailyCost: OfferResponse["price"]["daily"];
  providerLogoLink: OfferResponse["provider"]["logoUrl"];
  providerName: OfferResponse["provider"]["shortName"];
  ratingValue: OfferResponse["rating"]["value"];
  ratingCount: OfferResponse["rating"]["count"];
  locationName: OfferResponse["location"]["name"];
  locationLat: OfferResponse["location"]["lat"];
  locationLng: OfferResponse["location"]["lng"];
}

export function transformOfferResponseToEntity(
  response: OfferResponse
): OfferEntity {
  return {
    id: response.id,
    name: response.details.name,
    apartmentType: response.details.apartmentTypeTitle,
    photos: response.photos,
    guestCount: response.details.guestsCount,
    totalCost: response.price.total,
    currency: response.price.currency,
    dailyCost: response.price.daily,
    providerLogoLink: response.provider.logoUrl,
    providerName: response.provider.shortName,
    ratingValue: response.rating.value,
    ratingCount: response.rating.count,
    locationName: response.location.name,
    locationLat: response.location.lat,
    locationLng: response.location.lng,
  };
}
