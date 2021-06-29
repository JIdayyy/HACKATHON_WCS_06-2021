
import React from 'react';
import Sidebar from '../components/Sidebar';
import { fakeSquad } from '../fakeData';
import Group_Card from '../components/Group_Card';
import { useQuery } from '@apollo/client';
import { getSquads } from '../apollo/squadQueries';



function squad() {
  const { data, loading } = useQuery(getSquads);
  console.log(data);
  return (
    <div className="  h-screen overflow-y-auto w-full  ">
      <div className="flex w-full">
        <div className=" flex my-48 items-center  justify-center align-middle flex-wrap">
          {fakeSquad.map((group, index) => {
            return (
              <Group_Card
                key={index}
                name={group.name}
                buisness={group.business}
                description={group.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default squad;
