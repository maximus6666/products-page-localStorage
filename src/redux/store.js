import { createStore } from 'redux';
import {reducer} from "./reducers";

const localStorageState = localStorage.getItem('reduxState') 
const persistedState = localStorageState ? JSON.parse(localStorageState) : {products: []}

const store = createStore(
	reducer,
	persistedState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

store.subscribe(() => {
	localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;
