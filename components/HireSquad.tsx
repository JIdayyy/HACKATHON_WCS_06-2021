import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import close from "../public/images/close.svg";

export default function HireSquad() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm();
  const onSubmit = (data: object) => console.log(watch);
  console.log(errors);

  const [show, setShow] = useState(false);

  return (
    <div className="w-screen h-screen absolute bg-backGround bg-no-repeat bg-cover z-50">
      <div className="w-screen h-screen flex flex-col justify-center absolute items-center bg-black bg-opacity-50">
        <div className="w-11/12 flex flex-col  rounded-lg p-8 md:p-12 bg-backGround bg-cover sm:w-6/12 shadow-inputShadow">
          <div className="flex w-full justify-between">
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col  ">
                <p className="text-white font-Open text-4xl font-bold">
                  Space Rocket
                </p>
                <p className="text-white text-xl">
                  would gladly work with you, contact us!
                </p>
              </div>
              <Link href="/squadProfil">
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
