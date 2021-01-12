import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Card from "./Card";
import firebase from "../firebase";

function SignOutCard() {
  const user = useContext(UserContext);

  return (
    <Card background="secondary">
      <p>Hello, {user.providerData[0].displayName}!</p>
      <button
        className="btn btn-danger text-dark"
        onClick={() => firebase.auth().signOut()}
      >
        Sign-out
      </button>
    </Card>
  );
}

export default SignOutCard;
