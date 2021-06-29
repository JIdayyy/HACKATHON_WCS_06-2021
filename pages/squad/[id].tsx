import React from 'react';
import Freelance_Card from '../../components/Freelance_Card';
import Project_Card from '../../components/Project_Card copy';
import { fakeProject } from '../../fakeData';
import { useRouter } from 'next/dist/client/router';
import { getOneSquad } from '../../apollo/squadQueries';
import { useQuery } from '@apollo/client';
import {useState} from 'react'
import JoinSquad from '../../components/JoinSquad'
import Link from 'next/link';

function squad(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  const { data: squadData, loading } = useQuery(getOneSquad, { variables: { id } });
  const [isJoinForm, setIsJoinForm] = useState<boolean>(false)


const {id : myId} = router.query

  const handleClick = () => {
    window.history.back();
  };
console.log(squadData)
  return (
    <div className="  overflow-y-auto w-full h-screen ">
        {isJoinForm && <JoinSquad id={myId} setIsJoinForm={setIsJoinForm}/>}
      <div className=" w-full text-white mb-40">
        <div className="flex justify-end mr-14">
          <Link href="/squad">
            <button className="transition duration-500 bg-returnButton shadow-buttonShadow mt-5 px-8 py-2 rounded-md hover:scale-105">Return</button>
          </Link>
        </div>
        <div>
          <h1 className="sm:text-7xl text-6xl mx-4 sm:mx-0 font-bold">{squadData && squadData.Squad_by_pk.name}</h1>
          <div className="flex flex-row space-x-4 ">
            <h2 className="mt-1 sm:text-base mx-4 sm:mx-0  ">{squadData && squadData.Squad_by_pk.description}</h2>
           
              <button onClick={() => setIsJoinForm(!isJoinForm)} className="transition duration-500 bg-buttonBlue shadow-buttonShadow mt-1 px-8 py-2 rounded-md hover:-translate-y-1 h-16 hover:scale-105">
                Join squad
              </button>
          
            <Link href="/hiresquad">
              <button
                onClick={handleClick}
                className="ransition duration-500 h-16  bg-buttonBlue shadow-buttonShadow mt-1 px-8 py-2 rounded-md hover:-translate-y-1 hover:scale-105">
                Hire squad
              </button>
            </Link>
          </div>
        </div>

        <div className=" flex w-full flex-col justify-center space-y-5 mt-20 ">
          <div className="flex flex-wrap ">
            {squadData &&
              squadData?.Squad_by_pk?.User?.map((user: { id: string }, index: number) => {
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
              return <Project_Card key={index} name={project.name} url={project.url} />;
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
