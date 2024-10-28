
import { useContext, useEffect, useReducer, createContext } from "react";
import { AppContext } from "./main-context";

export const FilterContext = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        AllProducts: action.payload,
        FilterProducts: action.payload,
      };

    case "SORT_VALUE":
      return {
        ...state,
        sort_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      const { sort_value, FilterProducts } = state;
      let products_data = [...FilterProducts];
      let sorting_products = products_data;

      if (sort_value === "a-z") {
        sorting_products = products_data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }

      if (sort_value === "z-a") {
        sorting_products = products_data.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      if (sort_value === "highest") {
        sorting_products = products_data.sort((a, b) => b.price - a.price);
      }

      if (sort_value === "lowest") {
        sorting_products = products_data.sort((a, b) => a.price - b.price);
      }

      return {
        ...state,
        FilterProducts: sorting_products,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filter: { ...state.filter, [name]: value },
      };

    case "FILTER_PRODUCTS":
      const { text, category, dress_style, sizes, colors } = state.filter;
      const { AllProducts } = state;

      let filtered_products = AllProducts;

      if (text !== "") {
        filtered_products = filtered_products.filter((crntEle) =>
          crntEle.name.toLowerCase().includes(text.toLowerCase())
        );
      }

      if (category !== "All") {
        filtered_products = filtered_products.filter(
          (crntEle) => crntEle.category === category
        );
      }

      if (dress_style !== "All") {
        filtered_products = filtered_products.filter(
          (crntEle) => crntEle.dress_style === dress_style
        );
      }

      if (sizes !== "All") {
        filtered_products = filtered_products.filter((crntEle) =>
          crntEle.sizes.includes(sizes)
        );
      }

      if (colors !== "All") {
        filtered_products = filtered_products.filter((crntEle) =>
          crntEle.colors.includes(colors)
        );
      }

      return {
        ...state,
        FilterProducts: filtered_products,
      };

    case "CLEAR_FILTER":
      return {
        ...state,
        filter: {
          text: "",
          category: "All",
          dress_style: "All",
          sizes: "All",
          colors: "All",
        },
        FilterProducts: state.AllProducts,
      };

    default:
      return state;
  }
};

export const FilterProvider = ({ children }) => {
  const context = useContext(AppContext);

  const { productsData } = useContext(AppContext)
  
  const initialState = {
    AllProducts: [],
    FilterProducts: [],
    sort_value: "",
    filter: {
      text: "",
      category: "All",
      dress_style: "All",
      sizes: "All",
      colors: "All",
    },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
    dispatch({ type: "FILTER_PRODUCTS" });
  };

  const sorting = (e) => {
    let { value } = e.target;
    dispatch({ type: "SORT_VALUE", payload: value });
  };

  const clearFilterBtn = () => {
    dispatch({ type: "CLEAR_FILTER" });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: productsData });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [productsData, state.sort_value]);

  return (
    <FilterContext.Provider
      value={{ ...state, handleFilterChange, clearFilterBtn, sorting }}
    >
      {children}
    </FilterContext.Provider>
  );
};
