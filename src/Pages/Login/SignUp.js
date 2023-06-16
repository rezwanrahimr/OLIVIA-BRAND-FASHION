import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import registarImg from "../../images/Login-rafiki.svg";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Sheard/Loading";
import useToken from "../../hooks/UseToken";
import "./signUp.css";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();

  // Sign Up with Google.
  const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);

  // create user with Email and Password.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // Sign up with Facebook.
  const [signInWithFacebook, Fuser, Floading, Ferror] =
    useSignInWithFacebook(auth);
  const [token] = useToken(user || Guser || Fuser);

  if (error) {
    toast.error(error.message);
  }
  if (loading || Gloading || Floading) {
    return <Loading></Loading>;
  }
  if (token) {
    navigate("/Home");
  }

  return (
    <div style={{ marginTop: "80px" }}>
      <div className="row m-0 ">
        <div className="col-lg-6 col-sm-12 Image d-flex justify-content-center">
          <img src={registarImg} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="forms-container mt-5">
            <div className="signin-signup">
              <form action="#" className="formControl sign-in-form">
                <h2 className="title">REGISTER</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Name" />
                </div>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                  />
                </div>
                {error || Gerror || Ferror ? (
                  <p className="text-danger">
                    {error.message || Gerror.message || Ferror.message}
                  </p>
                ) : (
                  ""
                )}
                <Button
                  onClick={() =>
                    createUserWithEmailAndPassword(email, password)
                  }
                  className="px-5"
                  variant="outline-primary"
                >
                  CREATE
                </Button>{" "}
                <p className="social-text">
                  Already Have a Account?{" "}
                  <Link to={"/Login"} className="text-primary">
                    Login
                  </Link>
                </p>
                <div className="social-media">
                  <a
                    href="#"
                    onClick={() => signInWithFacebook(email, password)}
                    className="social-icon"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    onClick={() => signInWithGoogle(email, password)}
                    className="social-icon"
                  >
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
