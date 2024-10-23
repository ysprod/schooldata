import SignUpForm from "@/components/SignUpForm";
import { Image } from "@nextui-org/react";

const SignupPage = () => {
  return (
    <div className="grid items-center w-full grid-cols-1 gap-3 md:grid-cols-2 place-items-center">
          <SignUpForm />
      <Image src="/login.png" alt="Login Form" width={500} height={500} />
    </div>
  );
};

export default SignupPage;
