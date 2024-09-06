import { createStore, combineReducers } from "redux";
import cartReducer from "./CartReducer";
import authReducer from "./authReducer"; // Import authReducer directly

// Combine reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

// Create the Redux store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
