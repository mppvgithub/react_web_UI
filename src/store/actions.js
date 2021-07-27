export const MENU_AVAILABLE = 'MENU_AVAILABLE';
export const ADD_MENU='ADD_MENU';
export const UPDATE_MENU='UPDATE_MENU';
export const DEL_MENU='DEL_MENU';

// ==================== menu mangement ==================== 

export const get_addMenu = (details) => ({
    type: MENU_AVAILABLE,
    data: {details}
});

export const add_menu = (details) =>({
    type:ADD_MENU,
    data:{details}
})

export const update_menu = (details) =>({
    type:UPDATE_MENU,
    data:{details}
})
export const del_menu = (details) =>({
    type:DEL_MENU,
    data:{details}
})

// import { LOGIN, LOGOUT, ADD_TO_CART, GET_CART_CONTENTS, REMOVE_CART, CLEAR_CART, INCREMENT_ITEM, DECREMENT_ITEM } from './selectors';

// export const loginAction = () => ({
// 	type: LOGIN
// });

// export const logoutAction = () => ({
// 	type: LOGOUT
// });

// export const getCartContents = () => ({
// 	type: GET_CART_CONTENTS
// });

// export const addToCart = (item) => ({
// 	type: ADD_TO_CART,
// 	payload: item
// });

// export const removeCart = (item) => ({
// 	type: REMOVE_CART,
// 	payload: item
// });

// export const clearCart = () => ({
// 	type: CLEAR_CART
// });

// export const incrementItem = (item) => ({
// 	type: INCREMENT_ITEM,
// 	payload: item
// });

// export const decrementItem = (item) => ({
// 	type: DECREMENT_ITEM,
// 	payload: item
// });