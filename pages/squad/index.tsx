import React from 'react';
import Group_Card from '../../components/Group_Card';
import { useQuery } from '@apollo/client';
import { getSquads } from '../../apollo/squadQueries';

function squad(): JSX.Element {
  const { data, loading } = useQuery(getSquads);
  return (
    <div className="h-screen overflow-y-auto w-full mt-10">
      <div className=" flex flex-col items-center w-full">
        <div className="ease-in-out flex mb-60 justify-center sm:justify-start flex-wrap">
          {data?.Squad.map((group: { id: string; name: string; description: string; index: number; img_url: string }) => {
            return <Group_Card  id={group.id} name={group.name} description={group.description} img_url={group.img_url} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default squad;
