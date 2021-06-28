import Group_Card from '../components/Group_Card';
import SearchBar from '../components/SearchBar';
export default function Home(): JSX.Element {
  const ressource = [];
  return (
    <div className="h-screen text-white bg-backGround bg-cover bg-no-repeat bg-center w-screen Z-50 flex-col absolute top-0 items-center justify-center min-h-screen py-2">
      <div className="text-white w-screen h-screen flex flex-col justify-center items-center">
        <div className="font-Open">
          <h1 className="text-9xl text-center font-bold">fiverr.squad</h1>
          <h2 className="text-4xl font-bold">Find your perfect squad and speed up your projects.</h2>
        </div>
        <div className="text-center font-Montserrat mt-10">
          <h2 className="text-3xl font-light">You are aproject Manager or a freelancer</h2>
          <h3 className="text-2xl font-light">Find the team you need already build and ready to work on your dream project. </h3>
        </div>
      </div>
    </div>
  );
}
