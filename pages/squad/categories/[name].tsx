import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { useQuery } from '@apollo/client';
import { fakeSquad } from '../../../fakeData';
import Group_Card from '../../../components/Group_Card';
import { getSquads, squadById } from '../../../apollo/squadQueries';
interface ISquad {
  description: string;
  id: string;
  name: string;
}

function squadCategorie(): JSX.Element {
  ``;
  const router = useRouter();
  const { name } = router.query;
  console.log(router.query);
  const { data, loading } = useQuery(squadById, { variables: { name } });
  console.log(data);
  return (
    <div className="h-screen overflow-y-auto w-full  ">
      <div className=" flex flex-col items-center sm:items-start sm:mx-0 w-full">
        <h1 className="text-white ml-10 sm:mt-10 sm:ml-0 w-full font-Open font-bold text-2xl">{name}</h1>
        <div className="flex mb-60 mt-4 sm:mt-2 justify-center sm:justify-start flex-wrap">
          {data?.Squad.map((group: ISquad, index: number) => {
            return <Group_Card key={index} name={group.name} description={group.description} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default squadCategorie;
