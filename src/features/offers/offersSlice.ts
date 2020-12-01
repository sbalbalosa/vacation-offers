import {
  createSlice,
  createEntityAdapter,
  createAction,
} from "@reduxjs/toolkit";
import { OfferEntity } from "../../models/offer";
import { RootState } from "../../app/store";

export const fetchOffers = createAction("offers/fetchAll");
export const nextSearch = createAction("offers/nextSearch");
export const previousSearch = createAction("offers/previousSearch");

const entityAdapter = createEntityAdapter<OfferEntity>({
  selectId: (entity) => entity.id,
});

const entitySelector = entityAdapter.getSelectors<RootState>(
  (state) => state.offers
);

const offersSlice = createSlice({
  name: "offers",
  initialState: entityAdapter.getInitialState({
    isLoading: false,
    nextPage: null,
    previousPage: null,
    totalCount: 0,
    error: null,
  }),
  reducers: {
    offersReceived: entityAdapter.setAll,
    toggleIsLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    offersCursorReceived: (state, action) => {
      const { nextPage, previousPage, totalCount } = action.payload;
      state.nextPage = nextPage;
      state.previousPage = previousPage;
      state.totalCount = totalCount;
    },
    offersErrorReceived: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  offersReceived,
  toggleIsLoading,
  offersCursorReceived,
  offersErrorReceived,
} = offersSlice.actions;

export const selectOffers = (state: RootState): OfferEntity[] =>
  entitySelector.selectAll(state);

export const selectIsLoading = (state: RootState): boolean =>
  state.offers.isLoading;

export const selectError = (state: RootState): string | null =>
  state.offers.error;

export const selectCursor = (
  state: RootState
): { next: boolean; previous: boolean; totalCount: number } => {
  const { nextPage, previousPage, totalCount } = state.offers;
  return {
    next: !!nextPage,
    previous: !!previousPage,
    totalCount: totalCount,
  };
};

export default offersSlice.reducer;
