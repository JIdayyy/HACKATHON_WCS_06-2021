import React from 'react';
import Freelance_Card from '../../components/Freelance_Card';
import Project_Card from '../../components/Project_Card copy';
import { fakeProject } from '../../fakeData';
import { useRouter } from 'next/dist/client/router';
import { getOneSquad } from '../../apollo/squadQueries';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

function squad() {
  const router = useRouter();
  const { id } = router.query;
  const { data: squadeData, loading } = useQuery(getOneSquad, { variables: { id } });
  // const { data: projectData, loading} = useQuery(getAllProject, variables: {id})
  console.log(squadeData);

  const handleClick = () => {
    window.history.back();
  };

  return (
    <div className="  overflow-y-auto w-full h-screen ">
      <div className=" w-full text-white mb-40">
        <div className="flex justify-end mr-14">
          <Link href="/squad">
            <button className="transition duration-500 bg-returnButton shadow-buttonShadow mt-5 px-8 py-2 rounded-md hover:scale-105">Return</button>
          </Link>
        </div>
        <div>
          <h1 className="sm:text-7xl text-6xl mx-4 sm:mx-0 font-bold">Space Rocket</h1>
          <div className="flex flex-row space-x-4 ">
            <h2 className="mt-1 sm:text-4xl mx-4 sm:mx-0 text-2xl ">Your project to the moon and back</h2>
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

        <div className=" flex w-full flex-col justify-center space-y-5 mt-20 ">
          <div className="flex flex-wrap ">
            {squadeData &&
              squadeData?.Squad_by_pk?.User?.map((user: { id: string }, index: number) => {
                return <Freelance_Card key={index} id={user.id} />;
              })}
          </div>
          <div className="flex justify-center text-justify w-11/12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio at porttitor elit, luctus. Leo, dui egestas sit mi tellus et sed fermentum
              mauris. Velit morbi consectetur dolor elementum. Eu facilisis condimentum ligula enim. Leo aliquam amet nunc maecenas. Justo iaculis
              aliquam quisque tempor. Nibh venenatis dolor, ut mauris sit ipsum malesuada. Lobortis interdum erat scelerisque hendrerit duis. Senectus
              elit justo, purus fringilla faucibus sit mi lorem. Amet faucibus sed venenatis purus risus id cursus eget. Gravida eget auctor euismod
              risus ultrices. Aliquet volutpat risus quis aenean eu. Amet vitae aliquam iaculis integer amet, erat.
            </p>
          </div>
        </div>
        <div className=" flex flex-col justify-center space-y-5 mt-24 ">
          <div className="flex justify-center sm:justify-start flex-wrap ">Space Rocket worked on this projects</div>
          <div className="flex flex-wrap ">
            {fakeProject.map((project, index) => {
              return <Project_Card name={project.name} url={project.url} />;
            })}
          </div>
        </div>
        <div className=" flex flex-col justify-center space-y-5 mt-24">
          <div className="flex justify-center sm:justify-start flex-wrap ">We are looking to expand our Squad</div>
          <div className="flex justify-center sm:justify-start h-60 w-11/12 bg-gray-500 ">Hiring opportunities</div>
          <div className="flex justify-center text-justify w-11/12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio at porttitor elit, luctus. Leo, dui egestas sit mi tellus et sed fermentum
              mauris. Velit morbi consectetur dolor elementum. Eu facilisis condimentum ligula enim. Leo aliquam amet nunc maecenas. Justo iaculis
              aliquam quisque tempor. Nibh venenatis dolor, ut mauris sit ipsum malesuada. Lobortis interdum erat scelerisque hendrerit duis. Senectus
              elit justo, purus fringilla faucibus sit mi lorem. Amet faucibus sed venenatis purus risus id cursus eget. Gravida eget auctor euismod
              risus ultrices. Aliquet volutpat risus quis aenean eu. Amet vitae aliquam iaculis integer amet, erat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default squad;
