import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Explore from "./pages/Explore";

// wagmi
import { getConfig } from "../config.ts";
import { cookieToInitialState } from "wagmi";

import NFTDetail from "./pages/NFTDetail";

ReactDOM.render(
  <WagmiConfig config={config}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/detail" element={<NFTDetail />} />
      </Routes>
    </BrowserRouter>
  </WagmiConfig>,
  document.getElementById("root")
);

reportWebVitals();
