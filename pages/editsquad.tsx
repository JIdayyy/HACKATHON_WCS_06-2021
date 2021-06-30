import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/dist/client/router";
import { getOneSquad } from "../apollo/squadQueries";
import { allProjects } from "../apollo/projectQueries";
import { useQuery } from "@apollo/client";
import Loading from "../components/Loading";

export default function editSquad() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: object) => console.log(data);
  console.log(errors);

  const router = useRouter();

  const { data: squadData, loading: loading_1 } = useQuery(getOneSquad, {
    variables: { id },
  });
  const { data: projectData, loading: loading_2 } = useQuery(allProjects, {
    variables: { id },
  });
  if (loading_1 || loading_2) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col w-full  text-white items-center overflow-y-auto  ">
      <div className="flex flex-col w-11/12 md:w-10/12 lg:w-8/12">
        <h1>Edit your Squad</h1>
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
