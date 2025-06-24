'use client'
import { ReactNode, useReducer } from "react";
import { AppContext } from "./appContext";
import { appReducer } from "./appReducer";
import { AppState } from "@/interface/appStateInterface";
import { ImagePreloaderProvider } from "@/hooks/useImageHooks/imagePreloaderProvider";
// import { AppState } from "../interfaces/appStateInterface";
// import { ImagePreloaderProvider } from "../hooks/useImageHooks/imagePreloaderProvider";

interface Props {
  children: ReactNode;
}

const initialState: AppState = {
  registerUser: null,
};

export const AppProvider = ({ children }: Props) => {
  const [appState, dispatch] = useReducer(appReducer, initialState);



  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <ImagePreloaderProvider>{children}</ImagePreloaderProvider>
    </AppContext.Provider>
  );
};
