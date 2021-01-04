import {
  INCREMENT,
  DESCREMENT
} from './../actionTypes'

export const increment = (payload) => {
  return {
    type: INCREMENT,
    payload
  }
}

export const decrement = (payload) => {
  return {
    type: DESCREMENT,
    payload
  }
}
