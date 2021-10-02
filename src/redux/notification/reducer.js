import {
  NOT_FAILURE,
  NOT_REQUEST,
  NOT_SUCCESS,
  // REG_FAILURE,
  // REG_REQUEST,
  // REG_SUCCESS,
} from "./actionTypes";

const init = { Load: false, Error: false, Notifications: [] };

export const notificationReducer = (state = { ...init }, { type, payload }) => {
  //console.NOT(state, "users");
  switch (type) {
    case NOT_REQUEST:
      return {
        ...state,
        Load: true,
        Error: false,
      };
    case NOT_SUCCESS:
      return {
        ...state,
        Load: false,
        Notifications: [...state.Notifications, payload],
      };
    case NOT_FAILURE:
      return {
        ...state,
        Load: false,
        Error: true,
      };
    // case REG_REQUEST:
    //   return {
    //     ...state,
    //     Load: true,
    //     Error: false,
    //     reg: true,
    //   };
    // case REG_SUCCESS:
    //   return {
    //     ...state,
    //     Load: false,
    //     user: payload.user,
    //     token: payload.token,
    //   };
    // case REG_FAILURE:
    //   return {
    //     ...state,
    //     Load: false,
    //     Error: true,
    //   };
    default:
      return state;
  }
};
