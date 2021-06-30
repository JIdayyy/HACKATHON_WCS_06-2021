import { useForm } from "react-hook-form";
import { createSquad } from "../apollo/squadQueries";
import { useMutation, useQuery } from "@apollo/client";
import { getAllSectors } from "../apollo/sectorQueries";
import Error from "../components/Error";
import Loading from "../components/Loading";
interface IData {
  name: string;
  capacity: number;
  img_url: string;
  description: string;
  business: string;
}

export default function CreationSquad(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm();

  const [postSquad, { data, loading, error }] = useMutation(createSquad);

  const {
    data: BusinessesDatas,
    loading: BusinessLoading,
    error: business_error,
  } = useQuery(getAllSectors);

  const onSubmit = (data: IData) => {
    postSquad({
      variables: {
        squad: {
          name: data.name,
          capacity: data.capacity,
          img_url: data.img_url,
          description: data.description,
          business_id: data.business,
        },
      },
    });
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error message="Error during squad creation..." />;
  }
  if (business_error) {
    return <Error message="Error business query failed" />;
  }

  return (
    <div className="flex w-screen flex-col  align-middle justify-center text-white items-center pt-40 overflow-y-auto  ">
      <div className="flex flex-col w-9/12 md:w-9/12 lg:w-5/12">
        <h1 className="text-4xl font-bold">Create your Squad</h1>
        <form
          className=" font-Open  mt-3 flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="text-white">Squad name</p>
          <input
            className="rounded-md text-white focus:ouline-none outline-none bg-grayinput bg-opacity-30 shadow-inputShadow p-2"
            type="text"
            {...register("name", {})}
          />
          <p className="text-white mt-3">Business :</p>
          <select
            className="rounded-md text-white focus:ouline-none bg-grayinput bg-opacity-30 shadow-inputShadow p-2"
            {...register("business", {})}
          >
            {!BusinessLoading &&
              BusinessesDatas.BusinessSector.map(
                (business: { id: string; name: string }) => {
                  return (
                    <option className="text-black" value={business.id}>
                      {business.name}
                    </option>
                  );
                }
              )}
          </select>
          <p className="text-white mt-3">Capacity :</p>
          <input
            className="rounded-md text-white outline-none focus:ouline-none bg-grayinput bg-opacity-30 shadow-inputShadow p-2"
            type="number"
            {...register("capacity", {})}
          />
          <p className="text-white mt-3">Description text</p>
          <textarea
            className="h-36 rounded-md text-white outline-none focus:ouline-none bg-grayinput bg-opacity-30 shadow-inputShadow p-2"
            {...register("description", { maxLength: 500 })}
          />
          <p className="text-white mt-3">Squad Image</p>
          <input
            className="rounded-md text-white outline-none focus:ouline-none bg-grayinput bg-opacity-30 shadow-inputShadow p-2"
            type="text"
            {...register("name", {})}
          />

          <input
            className="rounded-md p-1 mt-5 w-20 outline-none cursor-pointer text-white bg-buttonBlue focus:outline-none shadow-inputShadow"
            type="submit"
            value="Save"
            onClick={handleSubmit(onSubmit)}
          />
        </form>
      </div>
    </div>
  );
}
