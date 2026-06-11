// action creator: it return a method

import { fetchProducts } from "../services/fetchProducts";
import { GET_PRODUCTS, TOGGLE_WISHLIST } from "../action/actionType";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const data = await fetchProducts();
      const update = data.map((p) => ({
        ...p,
        liked: false,
      }));

      dispatch({ type: GET_PRODUCTS, payload: update });
    } catch (err) {
      console.log(err);
    }
  };
};

export const toggleWishlist = (id) => {
  return async (dispatch) => {
    try {
      setTimeout(() => {
        dispatch({ type: TOGGLE_WISHLIST, payload: id });
      }, 500);
    } catch (err) {
      console.log(err);
    }
  };
};
