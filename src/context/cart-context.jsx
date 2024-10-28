
import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { colorState, sizeState, product, amount } = action.payload;
      let existing = state.cart.find(crnt => crnt.id === product.id + colorState + sizeState);

      if (existing) {
        let updatedCart = state.cart.map(crntEle => {
          if (crntEle.id === product.id + colorState + sizeState) {
            let newAmount = crntEle.amount + amount;
            return { ...crntEle, amount: newAmount };
          } else {
            return crntEle;
          }
        });

        return { ...state, cart: updatedCart };
      } else {
        const cartItem = {
          id: product.id + colorState + sizeState,
          image: product.image,
          name: product.name,
          color: colorState,
          amount: amount,
          price: product.price,
          sizes: sizeState,
          stock: product.stock,
        };
        return { ...state, cart: [...state.cart, cartItem] };
      }

    case "SET_DECREMENT":
      let updated = state.cart.map(crnt => {
        if (crnt.id === action.payload) {
          let decAmount = crnt.amount - 1;
          if (decAmount < 1) {
            decAmount = 1;
          }
          return { ...crnt, amount: decAmount };
        } else {
          return crnt;
        }
      });
      return { ...state, cart: updated };

    case "SET_INCREMENT":
      let updatedIncrement = state.cart.map(crnt => {
        if (crnt.id === action.payload) {
          let incAmount = crnt.amount + 1;
          if (incAmount > crnt.stock) {
            incAmount = crnt.stock;
          }
          return { ...crnt, amount: incAmount };
        } else {
          return crnt;
        }
      });
      return { ...state, cart: updatedIncrement };

    case "REMOVE_CART_ITEM":
      const { id } = action.payload;
      const updatedCart = state.cart.filter(item => item.id !== id);
      return { ...state, cart: updatedCart };

    case "TOTAL_CART_TOTAL":
      const cart_item = state.cart.reduce((accum, crnt) => {
        const { amount } = crnt;
        return accum + amount;
      }, 0);
      return { ...state, total_cart_item: cart_item };

    case "SET_SUBTOTAL":
      const update_total = state.cart.reduce((accum, crntEle) => {
        let { amount, price } = crntEle;
        return accum + price * amount;
      }, 0);
      return { ...state, subtotal_amount: update_total };

    case "CLEAR_CART_BTN":
      return { ...state, cart: [] };

    default:
      return state;
  }
};

const getCartItem = () => {
  const items = localStorage.getItem("set_Cart_Item");
  return items ? JSON.parse(items) : [];
};

export const CartProvider = ({ children }) => {
  const initialState = {
    cart: getCartItem(),
    total_cart_item: 0,
    total_item: "",
    shipping_fee: 300,
    subtotal_amount: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const AddToCartBtn = ({ colorState, sizeState, product, amount }) => {
    dispatch({ type: "ADD_TO_CART", payload: { colorState, sizeState, product, amount } });
  };

  const removeCartItem = (id) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: { id } });
  };

  const clearCartBtn = () => {
    dispatch({ type: "CLEAR_CART_BTN" });
  };

  const decrement = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const increment = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  useEffect(() => {
    localStorage.setItem("set_Cart_Item", JSON.stringify(state.cart));
    dispatch({ type: "TOTAL_CART_TOTAL" });
    dispatch({ type: "SET_SUBTOTAL" });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        AddToCartBtn,
        removeCartItem,
        increment,
        decrement,
        clearCartBtn,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
