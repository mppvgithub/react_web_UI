// import React from 'react';
// import { createStore } from 'redux';
import { LOGIN, LOGOUT, ADD_TO_CART, GET_CART_CONTENTS, REMOVE_CART, CLEAR_CART, INCREMENT_ITEM, DECREMENT_ITEM } from './selectors';
// import { loginAction, logoutAction } from './actions';

const initialCartContents = {
	itemsInfo: [],
	itemsCount: 0,
	itemsTotal: 0.00
};

const initialState = {
	isLogged: (localStorage.getItem('_id')) ? true : false,
	cartContents: (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : initialCartContents,
};

export default function reducer(state = initialState, action) {
	switch(action.type) {
		case LOGIN: {
			return { ...state, isLogged: true };
		}
		case LOGOUT: {
			return { ...state, isLogged: false, cartContents: initialCartContents };
		}
		case GET_CART_CONTENTS: {
			return { ...state }
		}
		case ADD_TO_CART: {
			if(state.cartContents.itemsCount === 0) {
				let newItem = {
					itemId: action.payload.itemId,
					itemName: action.payload.itemName,
					itemImage: action.payload.itemImage,
					itemAmount: action.payload.itemAmount,
					itemQuantity: 1,
				};
				state.cartContents.itemsInfo.push(newItem);
				state.cartContents.itemsTotal = state.cartContents.itemsTotal + action.payload.itemAmount;
			} else {
				let check = false;
				state.cartContents.itemsInfo.map((item, key) => {
					if(item.itemId === action.payload.itemId) {
						state.cartContents.itemsInfo[key].itemQuantity++;
						check = true;
					}
				});
				if(!check) {
					let newItem = {
						itemId: action.payload.itemId,
						itemName: action.payload.itemName,
						itemImage: action.payload.itemImage,
						itemAmount: action.payload.itemAmount,
						itemQuantity: 1,
					};
					state.cartContents.itemsInfo.push(newItem);
				}
				state.cartContents.itemsTotal = state.cartContents.itemsTotal + action.payload.itemAmount;
			}
			state.cartContents.itemsCount = state.cartContents.itemsCount + 1;
			localStorage.setItem('cart', JSON.stringify(state.cartContents));
			return { ...state }
		}
		case REMOVE_CART: {
			let remainingItems = [];
			state.cartContents.itemsInfo.map((item, key) => {
				if(item.itemId !== action.payload.itemId) {
					remainingItems.push(item);
				}
			});
			state.cartContents.itemsCount = state.cartContents.itemsCount - action.payload.itemQuantity;
			state.cartContents.itemsTotal = state.cartContents.itemsTotal - ( action.payload.itemQuantity * action.payload.itemAmount);
			state.cartContents.itemsInfo = remainingItems;
			localStorage.setItem('cart', JSON.stringify(state.cartContents));
			return { 
				...state,
				cartContents: {
					itemsInfo: remainingItems,
					itemsCount: state.cartContents.itemsCount,
					itemsTotal: state.cartContents.itemsTotal
				}
			}
		}
		case CLEAR_CART: {
			localStorage.removeItem('cart');
			return {
				...state,
				cartContents: {
					itemsInfo: [],
					itemsCount: 0,
					itemsTotal: 0.00,
				}
			}
		}
		case INCREMENT_ITEM: {
			state.cartContents.itemsInfo.map((item, key) => {
				if(item.itemId === action.payload.itemId) {
					state.cartContents.itemsInfo[ key ].itemQuantity++;
				}
			});
			state.cartContents.itemsCount = state.cartContents.itemsCount + 1;
			state.cartContents.itemsTotal = state.cartContents.itemsTotal + action.payload.itemAmount;
			localStorage.setItem('cart', JSON.stringify(state.cartContents));
			return {
				...state,
				cartContents: {
					itemsInfo: state.cartContents.itemsInfo,
					itemsCount: state.cartContents.itemsCount,
					itemsTotal: state.cartContents.itemsTotal
				}
			}
		}
		case DECREMENT_ITEM: {
			state.cartContents.itemsInfo.map((item, key) => {
				if(item.itemId === action.payload.itemId) {
					state.cartContents.itemsInfo[ key ].itemQuantity--;
				}
			});
			state.cartContents.itemsCount = state.cartContents.itemsCount - 1;
			state.cartContents.itemsTotal = state.cartContents.itemsTotal - action.payload.itemAmount;
			localStorage.setItem('cart', JSON.stringify(state.cartContents));
			return {
				...state,
				cartContents: {
					itemsInfo: state.cartContents.itemsInfo,
					itemsCount: state.cartContents.itemsCount,
					itemsTotal: state.cartContents.itemsTotal
				}
			}
		}
		default:
			return state;
	}
}