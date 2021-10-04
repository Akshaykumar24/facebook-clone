import {
  LOG_FAILURE,
  LOG_REQUEST,
  LOG_SUCCESS,
  REG_FAILURE,
  REG_REQUEST,
  FRND_SUCCESS,
  REG_SUCCESS,
  OUT_FAILURE,
  OUT_REQUEST,
  OUT_SUCCESS,
  POST_SUCCESS,
} from "./actionTypes";

const init = {
  user: {},
  Load: false,
  user2: {},
  Error: false,
  token: "",
  reg: false,
  frndData: {},
  postData: [],
};

export const authReducer = (state = { ...init }, { type, payload }) => {
  switch (type) {
    case LOG_REQUEST:
      return {
        ...state,
        Load: true,
        Error: false,
        reg: false,
      };
    case LOG_SUCCESS:
      return {
        ...state,
        Load: false,
        user: payload.userOnline,
        token: payload.token,
      };
    case LOG_FAILURE:
      return {
        ...state,
        Load: false,
        Error: true,
      };
    case REG_REQUEST:
      return {
        ...state,
        Load: true,
        Error: false,
        reg: true,
      };
    case REG_SUCCESS:
      return {
        ...state,
        Load: false,
        user: payload.user,
        token: payload.token,
      };
    case REG_FAILURE:
      return {
        ...state,
        Load: false,
        Error: true,
      };
    case FRND_SUCCESS:
      return {
        ...state,
        Load: false,
        user2: payload.user,
        token: payload.token,
        frndData: payload.user,
      };
    case OUT_REQUEST:
      return {
        ...state,
        Load: true,
        Error: false,
      };
    case OUT_SUCCESS:
      return {
        ...state,
        Load: false,
        user: {},
        token: "",
      };
    case OUT_FAILURE:
      return {
        ...state,
        Load: false,
        Error: true,
      };
    case POST_SUCCESS:
      return {
        ...state,
        Load: false,
        user2: payload.user,
        token: payload.token,
        frndData: payload.frndData,
        postData: payload.postData,
      };
    default:
      return state;
  }
};
