import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div>
      <SignIn afterSignInUrl="/profile" />
    </div>
  );
};

export default LoginPage;
