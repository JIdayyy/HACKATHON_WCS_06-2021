import React from 'react';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import { fakeSquad } from '../fakeData';
import Group_Card from '../components/Group_Card';
function squad(): JSX.Element {
  return (
    <div className="  h-screen overflow-y-auto w-full  ">
      <div className="flex flex-col w-full">
        <SearchBar />
        <div className=" flex mb-40 flex-wrap">
          {fakeSquad.map((group, index) => {
            return <Group_Card key={index} name={fakeSquad[0].name} buisness={fakeSquad[0].buisness} description={fakeSquad[0].description} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default squad;
