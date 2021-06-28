import React from 'react';

import { fakeSquad } from '../fakeData';
import Group_Card from '../components/Group_Card';
function squad(): JSX.Element {
  return (
    <div className="h-screen overflow-y-auto w-full  ">
      <div className=" flex flex-col items-center w-full">
        <div className="ease-in-out flex mb-60 justify-center sm:justify-center flex-wrap">
          {fakeSquad.map((group, index) => {
            return <Group_Card key={index} name={fakeSquad[0].name} buisness={fakeSquad[0].buisness} description={fakeSquad[0].description} />;
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
                name={fakeSquad[0].name}
                buisness={fakeSquad[0].buisness}
                description={fakeSquad[0].description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default squad;
