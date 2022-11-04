import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import store from "./redux/store";
import imgError from "./assets/img/error400-cover.png";
import Header from "./pages/Navbar/Navbar";
import PencarianData from "./pages/search/Search";
import DetailData from "./pages/Detail/Detail";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const simpanToken = localStorage.getItem("token");
  const [token, setToken] = useState(simpanToken);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<PencarianData />} />
          <Route path="/detail/:id" element={<DetailData />} />
          <Route
            path="/*"
            element={
              <img src={imgError} alt="Gambar Gagal Dimuat" width="100%" />
            }
          />
          <Route
            path="/register"
            element={<Register setToken={setToken} token={token} />}
          />
          <Route
            path="/login"
            element={<Login setToken={setToken} token={token} />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
