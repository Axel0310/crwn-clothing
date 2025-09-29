import "./sign-in-form.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import useFormObjectInput from "../../hooks/useFormObjectInput";
import GoogleSignInButton from "../google-sign-in-button/google-sign-in-button";
import { signInEmailAndPassword } from "../../helpers/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const formFieldsProps = useFormObjectInput(defaultFormFields);
  const {
    value: { email, password },
    onChange,
    resetState,
  } = formFieldsProps;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInEmailAndPassword(email, password);
      resetState();
    } catch (error) {
      if(error.code === "auth/invalid-credential") {
        alert("Wrong credentials");
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account ?</h2>
      <span>Enter your credentials</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={onChange}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={onChange}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <GoogleSignInButton type="button"/>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
