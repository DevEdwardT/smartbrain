import React from "react";
import { useState, useEffect } from "react";
import "./Register.css";
export default function Register({ onRouteChange, loadUser }) {
  const [email, setSEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onEmailChange = (e) => {
    setSEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onSubmitSignIn = (e) => {
    e.preventDefault();
    fetch("https://smartbrain-api-5e2k.onrender.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
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
                <legend className="f1 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name">
                    Name
                  </label>
                  <input
                    onChange={onNameChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="name"
                    name="name"
                    id="name"
                    required
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    onChange={onEmailChange}
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
                    onChange={onPasswordChange}
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
                  value="Register"
                />
              </div>
              <div className="lh-copy mt3"></div>
            </form>
          </div>
        </main>
      </article>
    </div>
  );
}
