import { useState } from "react";
import SignUp from "./components/sign-up";

function App() {
  const [token, setToken] = useState();
  if (!token) {
    return (
      <>
        <div>You have to be signed up to see the super secret image</div>
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
