import { useState } from "react";
import { appLogoUrl } from "../utils/constants";

const Header = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img alt="logo-img" src={appLogoUrl} />
      </div>

      <div className="header-links">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              loginBtnName === "Login"
                ? setLoginBtnName("Logout")
                : setLoginBtnName("Login");
            }}
          >
            {loginBtnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
