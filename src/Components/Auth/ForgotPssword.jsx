import { NavLink } from "react-router-dom";
import logo from "/images/logo.png";

function ForgotPassword() {
  return (
    <>
      <div className="form-container">
        <div className="align">
          <NavLink to="/home">
            <img src={logo} alt="Logo" className="logo login-logo" />
          </NavLink>
          <h2 className="secondary-header">Forgot Password?</h2>
          <p className="login-text">
            You don't need to worry. We will send a reset instruction
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

                <li className="form-l">
                  <input
                    type="submit"
                    value="Login"
                    className="input button login-btn login-input"
                  />
                </li>

                <li className="form-li">
                  <NavLink
                    to="/login-admin"
                    className="password
                  ">
                    &larr; Back to Login Page
                  </NavLink>
                </li>
              </ul>
            </nav>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
