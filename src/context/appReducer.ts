// import { AppState } from "../interfaces/appStateInterface";
import { AppState } from "@/interface/appStateInterface";
import { 
  ActionTypes,
  SET_REGISTERUSER,
  } from "@/types/actionTypes";

export const appReducer = (state: AppState, action: ActionTypes): AppState => {
  switch (action.type) {
    case SET_REGISTERUSER:
      return { ...state, registerUser: action.payload };
    default:
      return state;
  }
};
