import create from "zustand";
import { devtools, redux } from "zustand/middleware";

const initialState = { users: { token: "" }, todos: [] };

export const REGISTRATION = "REGISTRATION";
export const LOGIN = "LOGIN"
const reducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return { user: action.payload };
        case REGISTRATION:
            return state;
        default:
      return state;
    }
}

export const useStore = create(devtools(redux(reducer, initialState)));