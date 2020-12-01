import { RootState } from "../../app/store";

export const initialState: RootState = {
  offers: {
    ids: [],
    entities: {},
    isLoading: false,
    error: null,
    nextPage: null,
    previousPage: null,
    totalCount: 0,
  },
};
