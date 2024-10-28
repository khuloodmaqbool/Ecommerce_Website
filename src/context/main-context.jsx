
import { createContext, useEffect, useReducer } from "react";
import products_data from "../products.json";

export const AppContext = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS_DATA":
      return {
        ...state,
        productsData: action.payload,
        loadingState: false,
      };

    case "NEW_ARRIVAL_PRODUCTS":
      const newArrival = action.payload.filter((product) => {
        return product.label === "New Arrival";
      });

      return {
        ...state,
        newArrivalProducts: newArrival,
        loadingState: false,
      };

    case "TOP_SELLING_PRODUCTS":
      const topSelling = action.payload.filter((product) => {
        return product.label === "Top Selling";
      });

      return {
        ...state,
        topSellProducts: topSelling,
        loadingState: false,
      };

    case "LOADING":
      return {
        ...state,
        loadingState: true,
      };

    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const initialState = {
    productsData: [],
    newArrivalProducts: [],
    topSellProducts: [],
    loadingState: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProductsData = () => {
    try {
      dispatch({ type: "LOADING" });
      dispatch({ type: "PRODUCTS_DATA", payload: products_data });
      dispatch({ type: "NEW_ARRIVAL_PRODUCTS", payload: products_data });
      dispatch({ type: "TOP_SELLING_PRODUCTS", payload: products_data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
