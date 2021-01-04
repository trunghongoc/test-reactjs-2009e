import {
  SET_USER,
  SET_USERS,
  GET_INFO,
  GET_POSTS,
  GET_COMMENTS
} from './../actionTypes'

export const setUser = payload => {
  return {
    type: SET_USER,
    payload
  }
}

export const setUsers = payload => {
  return {
    type: SET_USERS,
    payload
  }
}

export const getComments = () => {
  return {
    type: GET_COMMENTS
  }
}

export const getPosts = () => {
  return {
    type: GET_POSTS
  }
}

export const getInfo = payload => dispatch => {
  if (payload === 'comments') {
    dispatch(getComments())
  } else {
    dispatch(getPosts())
  }
}
