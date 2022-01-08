export const OPEN_SIDE_BAR = "OPEN_SIDE_BAR";
export const SIDE_ON_MOBILE = "SIDE_ON_MOBILE";

export const leftBarAction = (data) => ({
  type: OPEN_SIDE_BAR,
  payload: data,
});

export const changeWidth = (data) => {
  return (dispatch) => {
    if (data < 510) {
      console.log("inside action function");
      dispatch({
        type: SIDE_ON_MOBILE,
        payload: false,
      });
    }
  };
};
