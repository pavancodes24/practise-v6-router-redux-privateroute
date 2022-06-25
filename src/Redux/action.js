//action object type payload ?

import { DEC_COUNTER, INC_COUNTER } from "./actionType";

export const incCounter = (payload) => {
  return {
    type: INC_COUNTER,
    payload
  };
};

export const decCounter = (payload) => {
  return {
    type: DEC_COUNTER,
    payload
  };
};
