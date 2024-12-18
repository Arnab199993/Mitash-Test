import { SignUp } from "@clerk/clerk-react";

const RegisterPage = () => {
  return (
    <div>
      <SignUp afterSignInUrl="/profile" />
    </div>
  );
};

export default RegisterPage;
