import { useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { getOneUser } from "../../apollo/userQueries";
import Project_Card from "../../components/Project_Card copy";
import { fakeProject } from "../../fakeData";
import Image from "next/image";

export default function Profil() {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading } = useQuery(getOneUser, { variables: { id } });

  console.log(data);
  if (loading) return <p>loading...</p>;

  return (
    <div className="flex flex-col h-full pb-36  text-white items-center sm:items-start  ">
      <div className="flex flex-col w-11/12 sm:w-full lg:w-8/12">
        <div className="text-2xl">
          <h1>Welcome to {data?.User_by_pk?.firstname}'s profile</h1>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div
            className=" h-60 w-5/6 mt-2 bg-gray-500 rounded-md md:w-3/12 md:h-60"
            style={{
              backgroundImage: `url(${data?.User_by_pk?.avatar_url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="">
          <h2 className="mt-14 text-lg font-bold">
            {data?.User_by_pk?.firstname} {data?.User_by_pk?.lastname}
          </h2>
          <p className="">Translater English/ Polish</p>
          <p>
            Working in{" "}
            <a href="/squadProfil" className="underline">
              IA translater Squad
            </a>
          </p>
          <a href="" className="underline">
            Fiverr Profile
          </a>
        </div>
        <div className="text-justify mt-10">
          <p>{`${data?.User_by_pk?.bio}`}</p>
        </div>
        <div className="flex justify-end">
          <button className="rounded-md w-2/5 p-1 mt-5 text-white bg-buttonBlue focus:outline-none shadow-inputShadow sm:w-1/5">
            Contact
          </button>
        </div>
        <div className="">
          <h2 className="text-xl">Projects</h2>
          <div>
            <div className="flex flex-wrap w-full ">
              {fakeProject.map((project, index) => {
                return <Project_Card name={project.name} url={project.url} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
