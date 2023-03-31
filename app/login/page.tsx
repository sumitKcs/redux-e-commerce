"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <div className="w-[100vw] bg-white bg-cover bg-no-repeat h-screen sm:h-[100svh] flex flex-col justify-center items-center gap-5 login">
      <div
        role="button"
        onClick={() =>
          signIn("google", {
            callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/sync`,
          })
        }
        className=" w-96 h-96 flex flex-col justify-center items-center  px-10 gap-16 cursor-pointer shadow-lg"
      >
        <div className="text-3xl font-bold text-yellow-800">Mzone</div>
        <div className="text-lg   ">Please Sign-In To Continue</div>
        <div className="w-full h-12 border border-blue-500 flex justify-center items-center rounded-sm ">
          <div className="w-[20%] flex justify-center items-center">
            <FcGoogle className=" w-6 h-6 " />
          </div>
          <div className="w-[80%] h-full bg-blue-500 text-white text-center my-auto flex justify-center items-center font-bold ">
            Sign In with Google
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
