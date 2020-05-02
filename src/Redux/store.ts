import { createStore, combineReducers } from "redux";

import { stateReducer } from "./reducers/state";
import { userReducer } from "./reducers/user";

const reducers = {
  state: stateReducer,
  user: userReducer
};

export type AppState = {
  [T in keyof typeof reducers]: ReturnType<typeof reducers[T]>;
};

export default createStore(combineReducers<AppState>(reducers));
