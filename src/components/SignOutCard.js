import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Card from "./Card";
import firebase from "../firebase";

function SignOutCard() {
  const user = useContext(UserContext);

  return (
    <Card background="light">
      <p className="text-center">Signed in with {user.providerData[0].email}</p>
      <button
        className="btn btn-danger text-dark btn-block"
        onClick={() => firebase.auth().signOut()}
      >
        Sign-out
      </button>
    </Card>
  );
}

export default SignOutCard;
