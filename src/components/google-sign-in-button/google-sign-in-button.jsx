import Button from "../button/button.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../helpers/firebase.utils";

const GoogleSignInButton = ({...props}) => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <Button onClick={logGoogleUser} buttonType="google" {...props}>
      Sign in with Google
    </Button>
  );
};

export default GoogleSignInButton;
