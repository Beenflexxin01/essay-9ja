import Button from "../../UI/Button";
import avt from "/images/avt.png";
function MainSettings() {
  return (
    <>
      <div className="containr">
        <div className="settings">
          <div className="tert">
            <h3 className="tertiary-header">Settings</h3>
          </div>
          <Button />
        </div>
        <div className="profile-studio">
          <h3 className="tertiary-header app-header">Profile Settings</h3>
          <img src={avt} alt="" className="avt-img" />
          <div className="profile-form">
            <form action="" className="pro-form">
              <nav className="profile-nav">
                <ul className="profile-ul">
                  <li className="profile-li">
                    <label htmlFor="name">Business Name</label>
                    <input
                      type="name"
                      className="input profile-input"
                      placeholder="e.g. Username"
                    />
                  </li>
                  <li className="profile-li">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      className="input profile-input"
                      placeholder="e.g. john@mail.com"
                    />
                  </li>
                  <li className="profile-li">
                    <label htmlFor="number">Telephone Number</label>
                    <input
                      type="number"
                      className="input profile-input"
                      placeholder="e.g. 1234567"
                    />
                  </li>
                  <li className="profile-li">
                    <label htmlFor="name">Location</label>
                    <input
                      type="location"
                      className="input profile-input"
                      placeholder="e.g. Lagos, Nigeria"
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
    </>
  );
}

export default MainSettings;
