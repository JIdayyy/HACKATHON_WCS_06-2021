import React from 'react';
import Project_Card from '../../components/Project_Card copy';
import { useRouter } from 'next/dist/client/router';
import { getOneSquad } from '../../apollo/squadQueries';
import { allProjects } from '../../apollo/projectQueries';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

interface IUser {
  firstname: string;
  lastname: string;
  bio: string;
  avatar_url: string;
}

function squad() {
  const router = useRouter();
  const { id } = router.query;
  const { data: squadeData } = useQuery(getOneSquad, { variables: { id } });
  const { data: projectData } = useQuery(allProjects, { variables: { id } });
  console.log(projectData);
  console.log(squadeData);

  const handleClick = () => {
    window.history.back();
  };

  return (
    <div className="overflow-y-auto mt-10 w-full sm:pr-20 h-screen">
      <div className="w-full text-white mb-80 sm:mb-40">
        <div className="mx-4 sm:mx-0">
          <div className="sm:mt-10">
            <div className="flex w-full justify-between">
              <h1 className="sm:text-7xl text-4xl sm:mx-0 font-bold">{squadeData?.Squad_by_pk?.name}</h1>{' '}
              <Link href="/squad">
                <button className="transition duration-500 bg-returnButton shadow-buttonShadow sm:h-12 px-4 sm:px-8 py-1 rounded-md hover:scale-105">
                  Return
                </button>
              </Link>
            </div>
            <h2 className="mt-1 sm:text-4xl sm:mx-0 sm:mt-2 text-2xl ">{squadeData?.Squad_by_pk?.BusinessSector.name}</h2>
          </div>
          <div className="flex justify-between mt-10 w-full sm:w-80">
            <Link href="/joinSquad">
              <button className="transition duration-500 bg-buttonBlue shadow-buttonShadow mt-1 px-8 py-2 rounded-md hover:-translate-y-1 hover:scale-105">
                Join squad
              </button>
            </Link>
            <Link href="/hiresquad">
              <button
                onClick={handleClick}
                className="ransition duration-500 bg-buttonBlue shadow-buttonShadow mt-1 px-8 py-2 rounded-md hover:-translate-y-1 hover:scale-105">
                Hire squad
              </button>
            </Link>
          </div>
        </div>

        <div className=" flex w-full flex-col justify-center mt-5">
          <div className="flex flex-wrap ">
            {squadeData &&
              squadeData?.Squad_by_pk?.users?.map((user: { User: IUser }, index: number) => {
                return (
                  <div
                    key={index}
                    className="transition mx-4 duration-500 w-11/12 my-4 sm:w-60 h-80 bg-white bg-blur-xl bg-opacity-20 sm:m-4 flex flex-col items-center shadow-inputShadow align-middle justify-between p-4 rounded-xl text-white transform hover:-translate-y-1 hover:scale-110">
                    <div
                      className="sm:h-60 sm:w-52 w-80 h-80 rounded-md shadow-buttonShadow"
                      style={{
                        backgroundImage: `url(${user.User.avatar_url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}></div>
                    <div className="w-full h-full flex flex-col items-left align-middle justify-center">
                      <div className="flex">
                        <p className="text-xl font-bold">{user.User.firstname} / </p>
                        <p className="text-xl font-bold">{user.User.lastname}</p>
                      </div>
                      <p className="text-xs overflow-hidden h-20 mt-1">{user.User.bio}</p>
                      <div className="text-xs"></div>
                    </div>
                    <div className="w-full">
                      <button className="text-sm font-bold bg-blue-400 rounded-md px-4 py-1">Fiverr Profil</button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="flex mx-4 sm:mx-0 flex-col justify-center text-justify sm:w-10/12">
            <h2 className="text-3xl font-bold mt-10 font-Open">Squad Description</h2>
            <p className="sm:text-lg text-sm mt-2 font-Montserrat">
              {squadeData?.Squad_by_pk?.description} {squadeData?.Squad_by_pk?.description}
            </p>
          </div>
        </div>
        <div className=" flex flex-col justify-center space-y-5 mt-14">
          <h1 className="flex text-3xl mx-4 sm:mx-0 font-Open font-bold justify-center sm:justify-start">
            The {squadeData?.Squad_by_pk?.name} squad made this projects
          </h1>
          <div className="flex flex-wrap ">
            {projectData?.Project?.map((project: { squad_id: string; name: string; url: string }, index: number) => {
              if (project.squad_id === squadeData?.Squad_by_pk?.id) {
                return <Project_Card key={index} name={project.name} url={project.url} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default squad;
