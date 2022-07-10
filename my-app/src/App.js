import { useState } from "react";
import SignUp from "./components/sign-up";
import SignIn from "./components/sign-in";

function App() {
  const [token, setToken] = useState();

  function authenticateUser(token) {
    setToken(token);
  }

  if (!token) {
    return (
      <>
        <div>You have to be signed up to see the super secret image</div>
        <SignIn onSignIn={authenticateUser}></SignIn>

        <SignUp></SignUp>
      </>
    );
  } else {
    return (
      <img
        alt="top secret"
        src="https://images.assetsdelivery.com/compings_v2/aquir/aquir1605/aquir160506165.jpg"
      ></img>
    );
  }
}

export default App;
