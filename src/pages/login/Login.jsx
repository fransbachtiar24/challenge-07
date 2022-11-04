import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "../../assets/css/styleku.css";
import Img from "../../assets/img/undraw_home_cinema_l7yl.svg";
import Login from "../../assets/img/undraw_wait_in_line_o2aq.svg";

function Index({ token, setToken }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      swal({
        text: "Email is required",
        icon: "info",
        button: "Ok",
      });
      return;
    }
    if (password === "") {
      swal({
        text: "Password is required",
        icon: "info",
        button: "Ok",
      });
      return;
    }

    if (email !== "" && password !== "") {
      const data = {
        email,
        password,
      };
      try {
        const results = await axios.post(
          `${process.env.REACT_APP_AUTH_API}/api/v1/auth/login`,
          data
        );
        if (results.data.token) {
          localStorage.setItem("token", results.data.token);
          setToken(results?.data.token);
          navigate("/");
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   setToken(null);
  // };

  return (
    <>
      <section class="h-100 gradient-form bg-light">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black mt-4">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">
                      <div class="text-center">
                        <img src={Img} alt="logo" width="150px" />
                        <h4 class="mt-1 mb-5 pb-1">Movielist</h4>
                      </div>

                      {!token ? (
                        <form onSubmit={handleSubmit}>
                          <div class="form-outline mb-4">
                            <input
                              type="text"
                              id="username"
                              class="form-control input-input"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div class="form-outline mb-4">
                            <input
                              type="password"
                              id="password"
                              name="password"
                              class="form-control input-input"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <div class="row mb-4">
                            <div class="col d-flex justify-content-center">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name="rememberme"
                                  id="rememberme"
                                />
                                <label
                                  class="form-check-label"
                                  for="form2Example31"
                                >
                                  Remember me
                                </label>
                              </div>
                            </div>

                            <div class="col forgot">
                              <a href="#!">Forgot password?</a>
                            </div>
                          </div>
                          <div class="text-center pt-1 mb-5 pb-1">
                            <button class="btn-login" type="submit">
                              Log in
                            </button>
                          </div>
                          <div class="d-flex justify-content-center text-center mt-4 pt-1"></div>
                          <div class="d-flex align-items-center justify-content-center pb-4">
                            <p class="mb-0 me-2">Don't have an account?</p>
                            <button
                              type="button"
                              class="btn-singup"
                              onClick={(e) => {
                                e.preventDefault();
                                navigate("/register");
                              }}
                            >
                              Create new
                            </button>
                          </div>
                        </form>
                      ) : (
                        <form onSubmit={handleSubmit}>
                          <div class="form-outline mb-4">
                            <input
                              type="text"
                              id="form2Example11"
                              class="form-control input-input"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                          <div class="form-outline mb-4">
                            <input
                              type="password"
                              id="form2Example22"
                              class="form-control input-input"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                          </div>
                          <div class="row mb-4">
                            <div class="col d-flex justify-content-center">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name="rememberme"
                                  id="rememberme"
                                />
                                <label
                                  class="form-check-label"
                                  for="form2Example31"
                                >
                                  Remember me
                                </label>
                              </div>
                            </div>

                            <div class="col forgot">
                              <a href="#!">Forgot password?</a>
                            </div>
                          </div>
                          <div class="text-center pt-1 mb-5 pb-1">
                            <button class="btn-login" type="submit">
                              Log in
                            </button>
                          </div>
                          <div class="d-flex justify-content-center text-center mt-4 pt-1"></div>
                          <div class="d-flex align-items-center justify-content-center pb-4">
                            <p class="mb-0 me-2">Don't have an account?</p>
                            <button
                              type="button"
                              class="btn-singup"
                              onClick={(e) => {
                                e.preventDefault();
                                navigate("/register");
                              }}
                            >
                              Create new
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                      <img
                        src={Login}
                        alt=""
                        width="400px"
                        className="img-login"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
