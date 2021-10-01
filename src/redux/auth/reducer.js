import {
  LOG_FAILURE,
  LOG_REQUEST,
  LOG_SUCCESS,
  REG_FAILURE,
  REG_REQUEST,
  REG_SUCCESS,
} from "./actionTypes";

const init = { user: {}, Load: false, Error: false, token: "", reg: false };

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
    default:
      return state;
  }
};
