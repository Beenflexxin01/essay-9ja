import logo from "../../../public/images/logo.png";
function Login() {
  return (
    <>
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <h2 className="secondary-header">👋Welcome Admin</h2>
        <p className="login-text">
          Login to your dashboard to tract the progress of your work or give out
          a project
        </p>
        <div className="form">
          <form action="" className="login-form">
            <nav className="fomr-nav">
              <ul className="form-ul">
                <li className="fomr-li">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="E.g. john@gmail.com"
                    required
                  />
                </li>
                <li className="fomr-li">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="........."
                    required
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
