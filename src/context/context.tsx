import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

export interface GlobalContext {
  darkMode?: boolean;
  primary?: string;
  secondary?: string;
  tertiary?: string;
  darkGray?: string;
  bgDarkGray?: string;
  regular?: string;
  semiBold?: string;
  bold?: string;
  showCart: boolean;
}

const initialState: GlobalContext = {
  darkMode: true,
  primary: "#025162",
  secondary: "#EADFD8",
  tertiary: "#E75313",
  darkGray: "#414141",
  bgDarkGray: "#E1E1E1",
  regular: "regular",
  semiBold: "semi-bold",
  bold: "bold",
  showCart: false,
};

const reducer = (state: GlobalContext, action: any): GlobalContext => {
  switch (action.type) {
    case false:
      return {
        showCart: true,
      };
    case true:
      return {
        showCart: false,
      };
    default:
      return state;
  }
};

export const StateContext = createContext<GlobalContext>(initialState);

export const DispatchContext = createContext<Dispatch<any> | undefined>(
  undefined
);

export const GlobalContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContext => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("Must be used within a ThemeProvider");
  }
  return context;
};

export const useGlobalDispatch = (): Dispatch<any> => {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) {
    throw new Error("Must be used within a ThemeProvider");
  }
  return dispatch;
};
