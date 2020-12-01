import {
  createSlice,
  createEntityAdapter,
  createAction,
} from "@reduxjs/toolkit";
import { OfferEntity } from "../../models/offer";
import { RootState } from "../../app/store";

export const fetchOffers = createAction("offers/fetchAll");

const entityAdapter = createEntityAdapter<OfferEntity>({
  selectId: (entity) => entity.id,
});

const entitySelector = entityAdapter.getSelectors<RootState>(
  (state) => state.offers
);

const offersSlice = createSlice({
  name: "offers",
  initialState: entityAdapter.getInitialState(),
  reducers: {
    offersReceived: entityAdapter.setAll,
  },
});

export const { offersReceived } = offersSlice.actions;

export const selectOffers = (state: RootState): OfferEntity[] =>
  entitySelector.selectAll(state);

export default offersSlice.reducer;
