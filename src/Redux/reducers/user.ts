import { useSelector } from "react-redux";

import AppState, { User } from "../../Interfaces/AppState";

type Actions = { type: "state/SIGN_IN" } | { type: "state/SIGN_OUT" };

const INITIAL: User = {
  id: ""
};

export const userReducer = (state = INITIAL, action: Actions): User => {
  switch (action.type) {
    default:
      return state;
  }
};

export const useUserState = () =>
  useSelector<AppState, User>(store => store.user);
