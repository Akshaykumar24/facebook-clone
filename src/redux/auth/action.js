import axios from "axios";
import { url } from "../../utils/url";

import {
  LOG_FAILURE,
  LOG_REQUEST,
  LOG_SUCCESS,
  REG_FAILURE,
  REG_REQUEST,
  REG_SUCCESS,
} from "./actionTypes";

export const logReq = () => {
  return { type: LOG_REQUEST };
};
export const logSuccess = (data) => {
  return { type: LOG_SUCCESS, payload: data };
};
export const logFail = (err) => {
  return {
    type: LOG_FAILURE,
    payload: err,
  };
};

export const regReq = () => {
  return { type: REG_REQUEST };
};
export const regSuccess = (data) => {
  return { type: REG_SUCCESS, payload: data };
};
export const regFail = (err) => {
  return {
    type: REG_FAILURE,
    payload: err,
  };
};

export const logUser = (data) => (dispatch) => {
  dispatch(logReq());
  axios
    .post(`${url}/api/login`, data)
    .then(({ data }) => {
      console.log(data);
      return dispatch(logSuccess(data));
    })
    .catch((err) => dispatch(logFail(err)));
};

export const regUser = (data) => (dispatch) => {
  dispatch(regReq());
  axios
    .post(`${url}/api/register`, data)
    .then(({ data }) => {
      console.log(data);
      return dispatch(regSuccess(data));
    })
    .catch((err) => dispatch(regFail(err)));
};
