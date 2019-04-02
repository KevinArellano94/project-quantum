import React, {
  unstable_ConcurrentMode as ConcurrentMode,
  StrictMode
} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import Header from './components/Header.js';
// import Footer from './components/Footer.js';

ReactDOM.render(
  <ConcurrentMode>
    <StrictMode>
      {/* <Header /> */}
      <App />
      {/* <Footer /> */}
    </StrictMode>
  </ConcurrentMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
