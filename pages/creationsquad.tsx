import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function CreationSquad(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm();
  const onSubmit = (data: object) => console.log(watch);
  console.log(errors);

  return (
    <div className="flex flex-col w-full  text-white items-center overflow-y-auto  ">
      <div className="flex flex-col w-11/12 md:w-10/12 lg:w-8/12">
        <h1>Create your Squad</h1>
        <form
          className=" font-Open  mt-3 flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="text-white">Squad name</p>
          <input
            className="rounded-md text-white focus:ouline-none bg-grayinput bg-opacity-30 shadow-inputShadow p-2"
            type="text"
            placeholder="Space rocket"
            {...register("name", {})}
          />
          <p className="text-white mt-3">Welcoming text</p>
          <input
            className="rounded-md text-white focus:ouline-none bg-grayinput bg-opacity-30 shadow-inputShadow p-2"
            type="text"
            placeholder="Your Project to the moon and back"
            {...register("name", {})}
          />
          <p className="text-white mt-3">member n*</p>
          <input
            className="rounded-md text-white focus:ouline-none bg-grayinput bg-opacity-30 shadow-inputShadow p-2"
            type="number"
            placeholder="member number"
            {...register("member number", {})}
          />
          <p className="text-white mt-3">Description text</p>
          <textarea
            className="h-36 rounded-md text-white focus:ouline-none bg-grayinput bg-opacity-30 shadow-inputShadow p-2"
            {...register("message", { maxLength: 500 })}
          />
          <p className="text-white mt-3">Squad Image</p>
          <input
            className="rounded-md text-white focus:ouline-none bg-grayinput bg-opacity-30 shadow-inputShadow p-2"
            type="text"
            placeholder="UPLOAD"
            {...register("name", {})}
          />
          <p className="text-white">Contact Email</p>
          <input
            className="rounded-md  mt-3 text-white focus:ouline-none bg-grayinput bg-opacity-30 shadow-inputShadow p-2"
            type="text"
            placeholder="email@email.com"
            {...register("email", {})}
          />
          <input
            className="rounded-md p-1 mt-5 w-20 text-white bg-buttonBlue focus:outline-none shadow-inputShadow"
            type="submit"
            value="Save"
            onClick={handleSubmit(onSubmit)}
          />
        </form>
      </div>
    </div>
  );
}
