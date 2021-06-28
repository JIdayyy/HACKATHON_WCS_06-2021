import React from 'react';
import Sidebar from '../components/Sidebar';

function squad() {
  return (
    <div className="bg-backGround bg-darkPink bg-cover bg-no-repeat h-full w-screen absolute top-0">
      <div className="flex">
        <Sidebar />
        <div className="h-96 bg-black"></div>
      </div>
    </div>
  );
}

export default squad;
