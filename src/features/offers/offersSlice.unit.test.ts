import reducer, {
  offersReceived,
  selectOffers,
  selectIsLoading,
  selectCursor,
  selectError,
  toggleIsLoading,
  offersErrorReceived,
  offersCursorReceived,
} from "./offersSlice";
import { RootState } from "../../app/store";
import { initialState } from "../../mocks/states/rootState";
import { OfferEntity } from "../../models/offer";

const offers = [
  { id: "1", name: "test" },
  { id: "2", name: "test2" },
];
const offerEntities: OfferEntity[] = [...(offers as OfferEntity[])];
const offersState: RootState["offers"] = {
  ...initialState.offers,
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

  it("should toggle loading state", () => {
    const state = reducer(initialState.offers, toggleIsLoading());

    expect(state.isLoading).toBe(true);
  });

  it("should set error", () => {
    const state = reducer(initialState.offers, offersErrorReceived("error"));

    expect(state.error).toBe("error");
  });

  it("should set cursor", () => {
    const cursor = {
      nextPage: "nextPage",
      previousPage: "previousPage",
      totalCount: 0,
    };
    const expectedState = {
      ...initialState.offers,
      ...cursor,
    };
    const state = reducer(initialState.offers, offersCursorReceived(cursor));
    expect(state).toStrictEqual(expectedState);
  });

  it("should get isLoading", () => {
    const state = {
      ...initialState,
      offers: offersState,
    };

    const isLoading = selectIsLoading(state);

    expect(isLoading).toBe(state.offers.isLoading);
  });
  it("should get error", () => {
    const state = {
      ...initialState,
      offers: { ...offersState, error: "test" },
    };

    const error = selectError(state);

    expect(error).toBe("test");
  });
  it("should get cursor", () => {
    const state = {
      ...initialState,
      offers: offersState,
    };

    const isLoading = selectIsLoading(state);

    expect(isLoading).toBe(state.offers.isLoading);
  });
});
