import React from "react";
import Project_Card from "../../components/Project_Card copy";
import { useRouter } from "next/dist/client/router";
import { getOneSquad } from "../../apollo/squadQueries";
import { allProjects } from "../../apollo/projectQueries";
import { useQuery } from "@apollo/client";
import Loading from "../../components/Loading";
import { useState } from "react";
import JoinSquad from "../../components/JoinSquad";
import FreelanceCard from "../../components/FreelanceCard2";

import Link from "next/link";

interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  bio: string;
  avatar_url: string;
}

function squad() {
  const [isJoinForm, setIsJoinForm] = useState<boolean>(false);
  const router = useRouter();
  const { id } = router.query;
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
    <div className="  overflow-y-auto w-full h-screen ">
      {isJoinForm && <JoinSquad id={id} setIsJoinForm={setIsJoinForm} />}
      <div className=" w-full text-white mb-40">
        <div className="flex justify-end mr-14">
          <Link href="/squad">
            <button className="transition duration-500 bg-returnButton shadow-buttonShadow mt-5 px-8 py-2 rounded-md hover:scale-105">
              Return
            </button>
          </Link>
        </div>
        <div>
          <h1 className="sm:text-7xl text-6xl mx-4 sm:mx-0 font-bold">
            {squadData && squadData.Squad_by_pk.name}
          </h1>
          <div className="flex flex-col space-x-4 ">
            <h2 className="mt-1 sm:text-base mx-4 pr-10 sm:mx-0  ">
              {squadData && squadData.Squad_by_pk.description}
            </h2>
            <div className="mt-10">
              <button
                onClick={() => setIsJoinForm(!isJoinForm)}
                className="transition-10 mr-10 duration-500 bg-buttonBlue shadow-buttonShadow mt-1 px-8 py-2 rounded-md hover:-translate-y-1 h-12 hover:scale-105"
              >
                Join squad
              </button>

              <Link href="/hiresquad">
                <button
                  className="ransition duration-500 h-12  bg-buttonBlue shadow-buttonShadow mt-1 px-8 py-2 rounded-md hover:-translate-y-1 hover:scale-105"
                  onClick={() => router.push("/hiresquad")}
                >
                  Hire squad
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex w-full flex-col justify-center mt-5">
          <h1 className="sm:text-3xl text-4xl mx-4 sm:mx-0 font-bold">
            Squad Freelancers
          </h1>
          <div className="flex flex-wrap ">
            {squadData &&
              squadData?.Squad_by_pk?.users?.map(
                (user: { User: IUser }, index: number) => {
                  return <FreelanceCard key={user.User.id} id={user.User.id} />;
                }
              )}
          </div>
          <div className="flex mx-4 sm:mx-0 flex-col justify-center text-justify sm:w-10/12">
            <h2 className="text-3xl font-bold mt-10 font-Open">
              Squad Description
            </h2>
            <p className="sm:text-lg text-sm mt-2 font-Montserrat">
              {squadData?.Squad_by_pk?.description}{" "}
            </p>
          </div>
        </div>
        <div className=" flex flex-col justify-center space-y-5 mt-14">
          <h1 className="flex text-3xl mx-4 sm:mx-0 font-Open font-bold justify-center sm:justify-start">
            The {squadData?.Squad_by_pk?.name} squad made this projects
          </h1>
          <div className="flex flex-wrap ">
            {projectData?.Project?.map(
              (
                project: { squad_id: string; name: string; url: string },
                index: number
              ) => {
                if (project.squad_id === squadData?.Squad_by_pk?.id) {
                  return (
                    <Project_Card
                      key={index}
                      name={project.name}
                      url={project.url}
                    />
                  );
                }
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default squad;
