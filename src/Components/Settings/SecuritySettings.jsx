import Button from "../../UI/Button";

function SecuritySettings() {
  return (
    <div className="containr">
      <div className="settings">
        <div className="tert">
          <h3 className="tertiary-header">Settings</h3>
        </div>
        <Button />
      </div>
      <div className="profile-studio">
        <h3 className="tertiary-header app-header">Security Settings</h3>
        <div className="profile-form">
          <form action="" className="pro-form">
            <nav className="profile-nav">
              <ul className="profile-ul">
                <li className="profile-li">
                  <label htmlFor="password">Old Password</label>
                  <input
                    type="password"
                    className="input profile-input"
                    placeholder="e.g. **********"
                  />
                </li>
                <li className="profile-li">
                  <label htmlFor="password">New Password</label>
                  <input
                    type="password"
                    className="input profile-input"
                    placeholder="e.g. **********"
                  />
                </li>
                <li className="profile-li">
                  <label htmlFor="password">Confirm-password</label>
                  <input
                    type="password"
                    className="input profile-input"
                    placeholder="e.g. **********"
                  />
                </li>

                <li className="profile-li">
                  <input
                    type="submit"
                    value="Update Changes"
                    className="input button profile-input"
                  />
                </li>
              </ul>
            </nav>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SecuritySettings;
