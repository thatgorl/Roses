import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Import Provider
import store from "./redux/store"; // Import your Redux store
import App from "./App"; // Import the App component
import "bootstrap/dist/css/bootstrap.min.css"; // Optional: Bootstrap for styling

ReactDOM.render(
  <Provider store={store}>
    {" "}
    {/* Wrap App with Provider and pass the store */}
    <App />
  </Provider>,
  document.getElementById("root")
);
