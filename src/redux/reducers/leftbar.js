import { initialState } from "../index";

import { OPEN_SIDE_BAR } from "../actions";

const leftBarReducer = (state = initialState.leftSideBar, action) => {
  switch (action.type) {
    case OPEN_SIDE_BAR:
      return {
        open: action.payload,
      };
    default:
      return state;
  }
};

export default leftBarReducer;
