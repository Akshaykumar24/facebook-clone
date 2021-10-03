import axios from "axios";
import { url } from "../../utils/url";
import { setData } from '../../utils/localStorage'
import {
  LOG_FAILURE,
  LOG_REQUEST,
  LOG_SUCCESS,
  REG_FAILURE,
  REG_REQUEST,
  REG_SUCCESS,
  FRND_SUCCESS,
  POST_SUCCESS
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
export const frndSuccess = (data) => {
  return { type: FRND_SUCCESS, payload: data };
};
export const postSuccess = (data) => {
  return { type: POST_SUCCESS, payload: data };
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
      setData("userData", data)

      dispatch(getUserPosts(data.userOnline._id))
      dispatch(getOtherUsersPosts(data.userOnline._id))
      dispatch(getAllUserPosts())
      return dispatch(logSuccess(data));
    })
    .catch((err) => dispatch(logFail(err)));
};

export const regUser = (data) => (dispatch) => {
  dispatch(regReq());
  axios
    .post(`${url}/api/register`, data)
    .then(({ data }) => {
      setData("userData", data)
      dispatch(getAllUserPosts())
      return dispatch(regSuccess(data));
    })
    .catch((err) => dispatch(regFail(err)));
};
export const updateUser = (data, id) => (dispatch) => {
  dispatch(regReq());
  axios
    .patch(`${url}/api/user/${id}`, data)
    .then(({ data }) => {
      dispatch(getUser(id))
      return dispatch(regSuccess(data));
    })
    .catch((err) => dispatch(regFail(err)));
};


// export const getUser = (id) => (dispatch) => {
//   dispatch(regReq());
//   if (!id) {
//     const failureAction = regFail("no results");
//     dispatch(failureAction);
//   }
//   return axios.get(`${url}/api/user/${id}`)
//     .then((res) => {
//       dispatch(regSuccess(res.data));
//     })
//     .catch((err) => {
//       const failureAction = regFail(err);
//       dispatch(failureAction);
//     });
// };

export const getUser = (id) => (dispatch) => {
  dispatch(regReq());
  axios
    .get(`${url}/api/user/${id}`)
    .then(({ data }) => {
      dispatch(getUserPosts(id))
      setData("userData", data)
      return dispatch(regSuccess(data));
    })
    .catch((err) => dispatch(regFail(err)));
};
export const getAnotherUser = (id) => (dispatch) => {
  dispatch(regReq());
  axios
    .get(`${url}/api/user/${id}`)
    .then(({ data }) => {
      dispatch(getUserPosts(id))
      setData("frndData", data)
      return dispatch(frndSuccess(data));
    })
    .catch((err) => dispatch(regFail(err)));
};
export const getUserPosts = (id) => (dispatch) => {
  dispatch(regReq());
  axios
    .get(`${url}/api/posts/user/${id}`)
    .then(({ data }) => {
      setData("userPosts", data)
      return dispatch(postSuccess(data));
    })
    .catch((err) => dispatch(regFail(err)));
};
export const getOtherUsersPosts = (id) => (dispatch) => {
  dispatch(regReq());
  axios
    .get(`${url}/api/posts/otherusers/${id}`)
    .then(({ data }) => {
      setData("otherUserPosts", data)
      return dispatch(postSuccess(data));
    })
    .catch((err) => dispatch(regFail(err)));
};
export const getAllUserPosts = () => (dispatch) => {
  dispatch(regReq());
  axios
    .get(`${url}/api/posts`)
    .then(({ data }) => {
      setData("allUserPosts", data)
      return dispatch(postSuccess(data));
    })
    .catch((err) => dispatch(regFail(err)));
};
