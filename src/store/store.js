import create from "zustand";
import { devtools, redux } from "zustand/middleware";

// define the store's initial state
const initialState = { user: { token: "" }, messages: [] };

// set action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GOOGLECALLBACK = "GOOGLECALLBACK";
export const GOOGLEAUTH = "GOOGLEAUTH";
export const REGISTER = "REGISTER";
export const UPDATEUSER = "UPDATEUSER";
export const DELETEUSER = "DELETEUSER";
export const GETUSERIMAGE = "GETUSERIMAGE";
export const SETUSERIMAGE = "SETUSERIMAGE";
export const GETMESSAGELIST = "GETMESSAGELIST";
export const CREATEMESSAGE = "CREATEMESSAGE";
export const DELETEMESSAGE = "DELETEMESSAGE";
export const ADDLIKE = "ADDLIKE";
export const DELETELIKE = "DELETELIKE";
export const GETUSER = "GETUSER";

// define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: {} };
    case REGISTER:
      return { user: action.payload };
    case GOOGLECALLBACK:
      return { user: action.payload }; //return?
    case GOOGLEAUTH:
      return { user: action.payload };
    case UPDATEUSER:
      return { profile: action.payload };
    case DELETEUSER:
      return { user: {} };
    case GETUSERIMAGE:
      return { messages: action.payload };
    case SETUSERIMAGE:
      return { messages: action.payload };
    case GETMESSAGELIST:
      return { messages: action.payload };
    case CREATEMESSAGE:
      return { messages: action.payload };
    case DELETEMESSAGE:
      return { messages: [] };
    case ADDLIKE:
      return { addLike: action.payload };
    case DELETELIKE:
      return { removeLike: {} };
    case GETUSER:
      return { profile: action.payload };
    default:
      return state;
  }
};

// create useStore hook
export const useStore = create(devtools(redux(reducer, initialState)));