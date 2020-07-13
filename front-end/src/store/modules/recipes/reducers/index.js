import types from "../../types";

import produce from "immer";

const INITIAL_STATE = {
  data: {
    content: [],
  },
  loading: false,
  error: false,
};

const recipes = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.FETCHING_RECIPES:
        draft.data.content = [];
        draft.loading = true;
        draft.error = false;
        break;
      case types.SUCCESS_FECTH_RECIPES:
        draft.data = action.payload.data;
        draft.loading = false;
        draft.error = false;
        break;
      case types.FAILURE_RECIPES:
        draft.data = { ...state };
        draft.loading = false;
        draft.error = true;
        break;
      case types.FETCHING_RECIPE:
        draft.data.content = [];
        draft.loading = true;
        draft.error = false;
        break;
      case types.SUCCESS_FECTH_RECIPE:
        draft.data = action.payload.data;
        draft.loading = false;
        draft.error = false;
        break;
      case types.FAILURE_FETCH_RECIPE:
        draft.data = { ...state };
        draft.loading = false;
        draft.error = true;
        break;
      default:
        return state;
    }
  });

export default recipes;
