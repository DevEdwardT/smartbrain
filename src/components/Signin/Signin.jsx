import React from "react";
import { useState, useEffect } from "react";
import "./Signin.css";
export default function Signin({ onRouteChange, loadUser }) {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const onSignInEmailChange = (e) => {
    setSignInEmail(e.target.value);
  };
  const onSignInPasswordChange = (e) => {
    setSignInPassword(e.target.value);
  };

  const onSubmitSignIn = (e) => {
    e.preventDefault();
    fetch("https://smartbrain-api-5e2k.onrender.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          loadUser(user);
          onRouteChange("home");
        }
      });
  };

  return (
    <div>
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure ">
            <form onSubmit={onSubmitSignIn}>
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    onChange={onSignInEmailChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    required
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    onChange={onSignInPasswordChange}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    required
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign in"
                />
              </div>
              <div className="lh-copy mt3">
                <p
                  onClick={() => onRouteChange("register")}
                  className="f6 link dim black db pointer"
                >
                  Register
                </p>
              </div>
            </form>
          </div>
        </main>
      </article>
    </div>
  );
}
