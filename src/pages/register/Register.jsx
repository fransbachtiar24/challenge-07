import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/styleku.css";
import Img from "../../assets/img/undraw_home_cinema_l7yl.svg";
import Login from "../../assets/img/undraw_login_re_4vu22.svg";
import swal from "sweetalert";

function Index({ token, setToken }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      swal({
        text: "Nama is required",
        icon: "info",
        button: "Ok",
      });
      return;
    }
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

    if (name !== "" && email !== "" && password !== "") {
      const data = {
        name,
        email,
        password,
      };
      try {
        const results = await axios.post(
          `${process.env.REACT_APP_AUTH_API}/api/v1/auth/register`,
          data
        );
        if (results.data.token) {
          localStorage.setItem("token", results.data.token);
          setToken(results.data.token);
          swal({
            title: "Selamat Anda Berhasil Register",
            text: results.data.message,
            icon: "success",
            button: "Ok",
          });
        }
      } catch (errr) {
        swal({
          text: errr.response.data.message,
          icon: "error",
          button: "Ok",
        });
      }
    }
  };

  return (
    <section class="h-100 gradient-form bg-light">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black mt-4">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">
                    <div class="text-center">
                      <img src={Img} alt="logo" width="120px" />
                      <h4 class="mt-1 mb-5 pb-1">Register</h4>
                    </div>

                    {!token ? (
                      <>
                        <form onSubmit={handleSubmit}>
                          <div class="form-outline mb-4">
                            <input
                              type="text"
                              value={name}
                              id="form2Example11"
                              onChange={(e) => setName(e.target.value)}
                              class="form-control input-input"
                              placeholder="Nama Lengkap"
                            />
                          </div>
                          <div class="form-outline mb-4">
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              id="form2Example11"
                              class="form-control input-input"
                              placeholder="Email"
                            />
                          </div>
                          <div class="form-outline mb-4">
                            <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              id="form2Example22"
                              class="form-control input-input"
                              placeholder="Password"
                            />
                          </div>
                          <div class="text-center pt-1 mb-5 pb-1">
                            <button class="btn-login" type="submit">
                              Register
                            </button>
                          </div>
                          <div class="d-flex justify-content-center text-center mt-4 pt-1"></div>
                          <div class="d-flex align-items-center justify-content-center pb-4">
                            <p class="mb-0 me-2">Have already an account?</p>
                            <button
                              type="button"
                              class="btn-singup"
                              onClick={(e) => {
                                e.preventDefault();
                                navigate("/login");
                              }}
                            >
                              Sign in
                            </button>
                          </div>
                        </form>
                      </>
                    ) : (
                      <form>
                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            value={name}
                            id="form2Example11"
                            onChange={(e) => setName(e.target.value)}
                            class="form-control input-input"
                            placeholder="Nama Lengkap"
                          />
                        </div>
                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="form2Example11"
                            class="form-control input-input"
                            placeholder="Email"
                          />
                        </div>
                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="form2Example22"
                            class="form-control input-input"
                            placeholder="Password"
                          />
                        </div>
                        <div class="text-center pt-1 mb-5 pb-1">
                          <button class="btn-login" type="submit">
                            Register
                          </button>
                        </div>
                        <div class="d-flex justify-content-center text-center mt-4 pt-1"></div>
                        <div class="d-flex align-items-center justify-content-center pb-4">
                          <p class="mb-0 me-2">Have already an account?</p>
                          <button
                            type="button"
                            class="btn-singup"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate("/login");
                            }}
                          >
                            Sign in
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
                      width="40px"
                      className="img-login logain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
