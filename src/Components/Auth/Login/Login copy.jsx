import { NavLink } from "react-router-dom";
import logo from "/images/logo.png";
import { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    // login(
    //   { email, password },
    //   {
    //     onSettled: () => {
    //       setEmail("");
    //       setPassword("");
    //     },
    //   }
    // );
  }
  return (
    <>
      <div className="form-container">
        <div className="align">
          <NavLink to="/home">
            <img src={logo} alt="Logo" className="logo login-logo" />
          </NavLink>
          <h2 className="secondary-header">👋Welcome Admin</h2>
          <p className="login-text">
            Login to your dashboard to tract the progress of your work or give
            out a project
          </p>
        </div>
        <div className="form">
          <form action="" className="login-form">
            <nav className="form-nav">
              <ul className="form-ul">
                <li className="form-li">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="input login-input"
                    placeholder="E.g. john@gmail.com"
                    required
                  />
                </li>
                <li className="form-li">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="input login-input"
                    placeholder="........."
                    required
                  />
                </li>

                <li className="form-li">
                  <NavLink
                    to="/forgot-password"
                    className="password
                  ">
                    Forgot Password?
                  </NavLink>
                </li>

                <li className="form-l">
                  <input
                    type="submit"
                    value="Login"
                    className="input button login-btn login-input"
                  />
                </li>
              </ul>
            </nav>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
