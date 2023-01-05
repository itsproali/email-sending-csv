import React, { useEffect, useState } from "react";
import apple_logo from "../../assets/apple.png";
import facebook_logo from "../../assets/facebook.png";
import google_logo from "../../assets/google.png";
import "./Login.css";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";
import auth from "../../utils/firebase.config";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const Login = () => {
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, [navigate]);

  const handleGoogleLogin = () => {
    signInWithRedirect(auth, googleProvider);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="login_container">
      <div>
        <div className="login_left">
          <h2>Social Login Buttons</h2>
        </div>
        <div className="login_right">
          <button className="login_btn facebook_login">
            <img src={facebook_logo} alt="fb" />
            <span>Continue with Facebook</span>
          </button>
          <button
            className="login_btn google_login"
            onClick={handleGoogleLogin}
          >
            <img src={google_logo} alt="apple" />
            <span>Continue with Google</span>
          </button>
          <button className="login_btn apple_login">
            <img src={apple_logo} alt="apple" />
            <span>Continue with Apple</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
