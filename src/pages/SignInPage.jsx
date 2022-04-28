import React, { useState } from "react";
import styled from "styled-components/macro";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isInvalid = password === "" || email === "";

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      console.log(auth);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      setEmail("");
      setPassword("");
      setErrorMessage(error.message);
    }
  };

  const handleSignInWithGoogle = async (e) => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({
      prompt: "select_account",
    });
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error) {
      setEmail("");
      setPassword("");
      setErrorMessage(error.message);
    }
  };

  return (
    <Wrapper className="page section section-center">
      <div className="form-container">
        <h1 className="title">Sign In</h1>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <form action="" className="signin-form" onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="signin-form-input"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="signin-form-input"
          />
          <button
            type="submit"
            className="signin-btn btn"
            disabled={isInvalid}
            style={{ cursor: `${isInvalid ? "not-allowed" : "pointer"}` }}
          >
            Sign In
          </button>
          <p className="text-center">or</p>
          <button
            className="google-btn btn"
            onClick={handleSignInWithGoogle}
            type="button"
          >
            <FcGoogle className="icon" />
            Sign in with google
          </button>
        </form>
        <p className="link-text">
          Don't have an account?
          <Link to="/sign-up" style={{ color: "#0d6efd" }}>
            {" "}
            Sign Up
          </Link>
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .form-container {
    display: flex;
    flex-direction: column;
    min-height: 550px;
    max-height: 650px;
    background-color: var(--clr-primary-8);
    border-radius: 5px;
    width: 100%;
    margin: auto;
    max-width: 450px;
    padding: 60px 68px 40px;
    margin-bottom: 30px;
  }
  .error {
    background: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: white;
    padding: 15px 20px;
  }

  .signin-form {
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
    margin-top: 45px;
  }
  .signin-form-input {
    background: var(--clr-white);
    border-radius: 4px;
    border: 0;
    color: var(--clr-black);
    height: 50px;
    line-height: 50px;
    padding: 5px 20px;
    margin-bottom: 20px;
    outline: none;

    &:last-of-type {
      margin-bottom: 30px;
    }
  }
  .signin-btn {
    background: #e50914;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin: 24px 0 12px;
    padding: 16px;
    border: 0;
    color: white;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
    }
  }
  .link-text {
    margin-top: 15px;
  }
  .icon {
    font-size: 18px;
    margin-right: 5px;
    background-color: white;
  }
  .google-btn {
    background: var(--clr-blue);
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--clr-white);
    :hover {
      color: var(--clr-white);
      background: #0a58ca;
    }
  }
`;

export default SignInPage;
