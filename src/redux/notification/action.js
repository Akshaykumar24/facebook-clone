// import axios from "axios";
// import { url } from "../../utils/url";

import { NOT_FAILURE, NOT_REQUEST, NOT_SUCCESS } from "./actionTypes";

export const notReq = () => {
  return { type: NOT_REQUEST };
};
export const notSuccess = (data) => {
  return { type: NOT_SUCCESS, payload: data };
};
export const notFail = (err) => {
  return {
    type: NOT_FAILURE,
    payload: err,
  };
};

export const notUser = (data) => (dispatch) => {
  dispatch(notReq());
  try {
    dispatch(notSuccess(data));
  } catch (err) {
    dispatch(notFail(err));
  }
};
