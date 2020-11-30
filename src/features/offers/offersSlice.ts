import {
  createSlice,
  createEntityAdapter,
  createAction,
  // PayloadAction,
} from "@reduxjs/toolkit";
import { OfferEntity } from "../../models/Offer";
import { RootState } from "../../app/store";

export const fetchOffers = createAction("offers/fetchAll");

const entityAdapter = createEntityAdapter<OfferEntity>({
  selectId: (entity) => entity.id,
});

export const entitySelector = entityAdapter.getSelectors<RootState>(
  (state) => state.offers
);

export const offersSlice = createSlice({
  name: "offers",
  initialState: entityAdapter.getInitialState(),
  reducers: {
    offersReceived: entityAdapter.setAll,
  },
});

export const { offersReceived } = offersSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectOffers = (state: RootState): OfferEntity[] =>
  entitySelector.selectAll(state);

export default offersSlice.reducer;
