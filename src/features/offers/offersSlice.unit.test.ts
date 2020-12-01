import reducer, { offersReceived, selectOffers } from "./offersSlice";
import { RootState } from "../../app/store";
import { initialState } from "../../mocks/states/rootState";
import { OfferEntity } from "../../models/offer";

const offers = [
  { id: "1", name: "test" },
  { id: "2", name: "test2" },
];
const offerEntities: OfferEntity[] = [...(offers as OfferEntity[])];
const offersState: RootState["offers"] = {
  ids: offers.map((x) => x.id),
  entities: {
    [offerEntities[0].id]: offerEntities[0],
    [offerEntities[1].id]: offerEntities[1],
  },
};

describe("features/offers/offersSlice", () => {
  it("should get all offers from state", () => {
    const expectedEntities: OfferEntity[] = offers as OfferEntity[];
    const state = {
      ...initialState,
      offers: offersState,
    };

    const entities = selectOffers(state);

    expect(entities).toStrictEqual(expectedEntities);
  });
  it("should set offers to state", () => {
    const state = reducer(
      initialState.offers,
      offersReceived(offers as OfferEntity[])
    );

    expect(state).toStrictEqual(offersState);
  });
});
