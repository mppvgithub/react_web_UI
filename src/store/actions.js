import { LOGIN, LOGOUT, ADD_TO_CART, GET_CART_CONTENTS, REMOVE_CART, CLEAR_CART, INCREMENT_ITEM, DECREMENT_ITEM } from './selectors';

export const loginAction = () => ({
	type: LOGIN
});

export const logoutAction = () => ({
	type: LOGOUT
});

export const getCartContents = () => ({
	type: GET_CART_CONTENTS
});

export const addToCart = (item) => ({
	type: ADD_TO_CART,
	payload: item
});

export const removeCart = (item) => ({
	type: REMOVE_CART,
	payload: item
});

export const clearCart = () => ({
	type: CLEAR_CART
});

export const incrementItem = (item) => ({
	type: INCREMENT_ITEM,
	payload: item
});

export const decrementItem = (item) => ({
	type: DECREMENT_ITEM,
	payload: item
});