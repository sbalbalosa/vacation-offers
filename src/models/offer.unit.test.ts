import { transformOfferResponseToEntity, OfferEntity } from "./offer";
import searchOffers from "../mocks/responses/searchOffers.json";
import { Offer } from "../types";

describe("models/offer", () => {
  it("should transfer response data to entity", () => {
    const offerResponse: Offer = searchOffers.offers[0];

    const offerEntity = transformOfferResponseToEntity(offerResponse);

    expect(offerEntity).toEqual<OfferEntity>({
      id: offerResponse.id,
      name: offerResponse.details.name,
      apartmentType: offerResponse.details.apartmentTypeTitle,
      photos: offerResponse.photos,
      guestCount: offerResponse.details.guestsCount,
      totalCost: offerResponse.price.total,
      currency: offerResponse.price.currency,
      dailyCost: offerResponse.price.daily,
      providerLogoLink: offerResponse.provider.logoUrl,
      providerName: offerResponse.provider.shortName,
      ratingValue: offerResponse.rating.value,
      ratingCount: offerResponse.rating.count,
      locationName: offerResponse.location.name,
      locationLat: offerResponse.location.lat,
      locationLng: offerResponse.location.lng,
    });
  });
});
