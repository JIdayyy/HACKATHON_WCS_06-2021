import { useState, useEffect, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import Image from "next/image";
import { addUserToSquad } from "../apollo/squadQueries";

import { Dispatch } from "react";
import router from "next/router";
import { useRecoilState } from "recoil";
import { errorState } from "../components/states";

interface IProps {
  setIsJoinForm: Dispatch<SetStateAction<boolean>>;
  id: string | string[] | undefined;
}

export default function JoinSquad({ setIsJoinForm, id }: IProps): JSX.Element {
  const [isError, setIsError] = useRecoilState(errorState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm();

  const [addUser, { data, loading, error }] = useMutation(addUserToSquad);
  const onSubmit = (data: object) => {
    addUser({
      variables: {
        userId: "8685232e-ec66-452c-8d07-daa0ab9d954f",
        squadId: id,
      },
    });
  };
  console.log(error);
  if (error) {
    router.reload();
    setIsError(true);
    console.log(error.message);
  }

  const [show, setShow] = useState(false);

  return (
    <div className="w-screen h-screen fixed bg-backGround bg-no-repeat bg-cover top-0 left-0 z-50">
      {isError ? error?.message : ""}
      <div className="w-screen h-screen flex flex-col justify-center absolute items-center bg-black bg-opacity-50">
        <div className="w-11/12 flex flex-col  rounded-lg p-8 md:p-12 bg-backGround bg-cover sm:w-6/12 shadow-inputShadow">
          <div className="flex w-full justify-between">
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col  ">
                <p className="text-white font-Open text-4xl font-bold">
                  Space Rocket
                </p>
                <p className="text-white text-xl">
                  is looking for a new crew member
                </p>
              </div>

              <Image
                onClick={() => setIsJoinForm((c) => !c)}
                className="cursor-pointer"
                src="/images/close.svg"
                width={20}
                height={20}
                alt="close"
              />
            </div>
          </div>

          <form
            className="flex font-Open flex-col mt-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="text-white">name</p>
            <input
              className="rounded-md text-white focus:ouline-none bg-grayinput bg-opacity-30 shadow-inputShadow p-2"
              type="text"
              placeholder="Matthias"
              {...register("name", {})}
            />
            <p className="text-white mt-3">Email</p>
            <input
              className="rounded-md text-white focus:ouline-none bg-grayinput bg-opacity-30 shadow-inputShadow p-2"
              type="text"
              placeholder="email@email.com"
              {...register("email", {})}
            />
            <p className="text-white mt-3">Let us a message</p>
            <textarea
              className="h-36 rounded-md text-white focus:ouline-none bg-grayinput bg-opacity-30 shadow-inputShadow p-2"
              {...register("message", { maxLength: 500 })}
            />

            <input
              className="rounded-md p-1 mt-5 text-white bg-buttonBlue focus:outline-none shadow-inputShadow"
              type="submit"
              value="Send"
              onClick={handleSubmit(onSubmit)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
