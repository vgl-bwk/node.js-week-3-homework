import { useState } from "react";
import { signIn } from "../services/auth.js";

function SignIn(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="div">
      <h2>Sign In</h2>
      <form>
        <label for="enterUN">"User email"</label>
        <input
          type="text"
          id="enterUN"
          onChange={(event) => setName(event.target.value)}
        ></input>
        <label for="enterPW">Password</label>
        <input
          type="password"
          id="enterPW"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
      </form>
      <button
        id="logIn"
        onClick={() => {
          const token = signIn(name, password);
          props.onSignIn(token);
        }}
      >
        Log in
      </button>
    </div>
  );
}

export default SignIn;
