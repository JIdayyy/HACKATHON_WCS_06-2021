import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import close from "../public/images/close.svg";
import axios from "axios";
import router, { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userState, authState } from "../components/states";

export default function LoginForm(): JSX.Element {
  const [userAppState, setUserAppState] = useRecoilState(userState);
  const [isAuth, setisAuth] = useRecoilState(authState);
  console.log(isAuth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm();

  const onSubmit = async (data: { email: string; password: string }) => {
    const RES = await axios({
      method: "POST",
      url: process.env.NEXT_PUBLIC_LOGIN_URL,

      data: {
        email: data.email,
        password: data.password,
      },
    });

    const user = RES.data[0];
    setUserAppState({ ...user });
    localStorage.setItem("user", JSON.stringify(user));
    if (user.id) {
      return router.push("/");
    }
  };

  const [show, setShow] = useState(false);

  return (
    <div className="w-screen h-screen absolute bg-backGround bg-no-repeat bg-cover z-50">
      <div className="w-screen h-screen flex flex-col justify-center absolute items-center p-4 bg-black bg-opacity-50">
        <div className="flex flex-col  rounded-lg p-8 md:p-12 bg-backGround bg-cover  shadow-inputShadow">
          <div className="flex w-full justify-between">
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col  ">
                <p className="text-white font-Open text-4xl font-bold">Login</p>
                {isAuth ? (
                  <p className="text-white text-xl">
                    Compte créé avec succes, veuillez vous connecter.
                  </p>
                ) : (
                  <p className="text-white text-xl">
                    Join and work with the fiver freelance community
                  </p>
                )}
              </div>
              <Link href="/">
                <Image
                  className="cursor-pointer"
                  src={close}
                  width={20}
                  height={20}
                  alt="close"
                />
              </Link>
            </div>
          </div>

          <form
            className="flex font-Open flex-col mt-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="text-white">Email</p>
            <input
              className="rounded-md text-white focus:ouline-none bg-grayinput bg-opacity-30 shadow-inputShadow p-2"
              type="text"
              placeholder="email@email.com"
              {...register("email", {})}
            />
            <label className="text-white mt-3">Password</label>

            <input
              className="rounded-md text-white bg-grayinput focus:outline-none bg-opacity-30 shadow-inputShadow p-2"
              type="text"
              placeholder="password"
              {...register("password", {
                required: "Specify your password",
              })}
            />
            {errors.password && (
              <p style={{ color: "white" }}>{errors.password.message}</p>
            )}

            <input
              className="rounded-md p-1 mt-5 text-white cursor-pointer bg-buttonBlue focus:outline-none shadow-inputShadow"
              type="submit"
              value="Connect"
            />
            <div className="flex flex-col text-center mt-2 mb-8 text-white">
              <p className="text-xs">
                {"Don't have an account? "}
                <span className="text-blue-500">
                  <a href="/signup">Sign up</a>
                </span>
              </p>
              <p className="text-xs">
                Forgot Password?
                <span className="text-blue-500">New password</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
