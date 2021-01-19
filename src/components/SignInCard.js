import Card from "./Card";
import firebase from "../firebase";

function SignInCard() {
  function googleSignIn() {
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  return (
    <Card background="light">
      <p className="text-center">Sign-in to save your data!</p>
      <button
        className="btn btn-secondary btn-block"
        onClick={() => googleSignIn()}
      >
        <i className="fab fa-google mr-2"></i>
        Sign-in with Google
      </button>
    </Card>
  );
}

export default SignInCard;
