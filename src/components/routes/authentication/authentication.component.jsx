import SignUpFrom from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-from/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpFrom />
    </div>
  );
};

export default Authentication;
