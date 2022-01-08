import { initialState } from "../index";

import { OPEN_SIDE_BAR, SIDE_ON_MOBILE } from "../actions";

const leftBarReducer = (state = initialState.leftSideBar, action) => {
  switch (action.type) {
    case OPEN_SIDE_BAR:
      return {
        open: action.payload,
      };
    case SIDE_ON_MOBILE:
      return {
        open: false || action.payload,
      };
    default:
      return state;
  }
};

export default leftBarReducer;
