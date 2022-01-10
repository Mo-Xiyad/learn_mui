import { initialState } from "../index";

import { SET_RESTAURANT_DATA } from "../actions";

const restaurantReducer = (state = initialState.restaurant, action) => {
  switch (action.type) {
    case SET_RESTAURANT_DATA:
      return {
        tables: action.payload.tables,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

export default restaurantReducer;
