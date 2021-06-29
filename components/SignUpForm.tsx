import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import close from "../public/images/close.svg";
import { createUser } from "../apollo/userQueries";
import { useMutation, gql } from "@apollo/client";
export default function SignUpForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm();

  const [AddUser, { data }] = useMutation(createUser);
  
  const onSubmit = (data: { email: string; password: string }) =>
    AddUser({
      variables: {
        user: {
          email: data.email,
          password: data.password,
        },
      },
    });
  return (
    <div className="w-screen h-screen absolute bg-backGround bg-no-repeat bg-cover z-50">
      <div className="w-screen h-screen flex flex-col justify-center absolute items-center bg-black bg-opacity-50">
        <div className="w-11/12 flex flex-col  rounded-lg p-8 md:p-12 bg-backGround bg-cover sm:w-6/12 shadow-inputShadow">
          <div className="flex w-full justify-between">
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col  ">
                <p className="text-white font-Open text-4xl font-bold">
                  Sign up
                </p>
                <p className="text-white text-xl">
                  Join and work with the fiver freelance community
                </p>
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
            <p className="text-white mt-5">Email</p>
            <input
              className="rounded-md text-white focus:ouline-none bg-grayinput bg-opacity-30 shadow-inputShadow p-2"
              type="text"
              {...register("email", {})}
            />
            <label className="text-white mt-3">Password</label>

            <input
              className="rounded-md text-white bg-grayinput focus:outline-none bg-opacity-30 shadow-inputShadow p-2"
              type="text"
              {...register("password", {
                required: "Specify your password",
                minLength: {
                  value: 10,
                  message: "Password must have at least 10 characters",
                },
              })}
            />
            {errors.password && (
              <p style={{ color: "white" }}>{errors.password.message}</p>
            )}
            <label className="text-white mt-3">Confirm Password</label>
            <input
              className="rounded-md text-white bg-grayinput bg-opacity-30 focus:outline-none shadow-inputShadow p-2"
              type="text"
              {...register("passwordConfirmation", {
                required: "Please confirm password!",
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues();
                    return password === value || "Passwords should match!";
                  },
                },
              })}
            />
            {errors.passwordConfirmation && (
              <p style={{ color: "white" }}>
                {errors.passwordConfirmation.message}
              </p>
            )}
            <input
              className="rounded-md p-1 mt-5 text-white bg-buttonBlue focus:outline-none shadow-inputShadow"
              type="submit"
              value="Connect"
              onClick={handleSubmit(onSubmit)}
            />
            <div className="flex flex-col text-center mt-2 mb-8 text-white">
              <p className="text-xs">
                {"Already have an account? "}
                <span className="text-blue-500">
                  <a href="/login">Sign in</a>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
