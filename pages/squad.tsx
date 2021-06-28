import React from 'react';
import Sidebar from '../components/Sidebar';

import { fakeSquad } from '../fakeData';
import Group_Card from '../components/Group_Card';
function squad(): JSX.Element {
  return (
    <div className="h-screen overflow-y-auto w-full  ">
      <div className=" flex flex-col items-center w-full">
        <div className="ease-in-out flex mb-40 justify-center sm:justify-center flex-wrap">
          {fakeSquad.map((group, index) => {
            return <Group_Card key={index} name={fakeSquad[0].name} buisness={fakeSquad[0].buisness} description={fakeSquad[0].description} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default squad;
