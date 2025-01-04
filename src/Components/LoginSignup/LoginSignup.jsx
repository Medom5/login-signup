import "./LoginSignup.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" name="" id="" />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" name="" id="" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" name="" id="" />
        </div>
      </div>
      <div className="forgot-password">
        Forgot Password? <span> Click here!</span>
      </div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  );
};

export default LoginSignup;
