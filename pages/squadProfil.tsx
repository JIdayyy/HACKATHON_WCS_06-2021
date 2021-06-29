import React, { useRef } from "react";
import Freelance_Card from "../components/Freelance_Card";
import Project_Card from "../components/Project_Card copy";
import { freelancers } from "../fakeData";
import { fakeProject } from "../fakeData";

function squad() {
  return (
    <div className="  overflow-y-auto w-full h-screen ">
      <div className=" w-full text-white  m-10 mb-40">
        <div className="flex justify-end mr-14">
          <button className="bg-returnButton shadow-buttonShadow mt-5 px-8 py-2 rounded-md">
            <a href="/squad">Return</a>
          </button>
        </div>
        <div>
          <h1 className="sm:text-7xl text-6xl mx-4 font-bold">Space Rocket</h1>
          <div className="flex flex-row space-x-4 ">
            <h2 className="mt-1 sm:text-4xl mx-4 text-2xl ">
              Your project to the moon and back
            </h2>
            <button className="bg-buttonBlue shadow-buttonShadow mt-1 px-8 py-2 rounded-md">
              <a href="/joinSquad">Join squad</a>
            </button>
            <button className="bg-buttonBlue shadow-buttonShadow mt-1 px-8 py-2 rounded-md">
              <a href="/hiresquad">Hire squad</a>
            </button>
          </div>
        </div>

        <div className=" flex w-full flex-col justify-center space-y-5 mt-20 ">
          <div className="flex flex-wrap ">
            {freelancers.map((squad, index) => {
              return (
                <Freelance_Card
                  name={squad.name}
                  job={squad.job}
                  description={squad.description}
                  business={squad.business}
                />
              );
            })}
          </div>
          <div className="flex justify-center text-justify w-11/12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio at
              porttitor elit, luctus. Leo, dui egestas sit mi tellus et sed
              fermentum mauris. Velit morbi consectetur dolor elementum. Eu
              facilisis condimentum ligula enim. Leo aliquam amet nunc maecenas.
              Justo iaculis aliquam quisque tempor. Nibh venenatis dolor, ut
              mauris sit ipsum malesuada. Lobortis interdum erat scelerisque
              hendrerit duis. Senectus elit justo, purus fringilla faucibus sit
              mi lorem. Amet faucibus sed venenatis purus risus id cursus eget.
              Gravida eget auctor euismod risus ultrices. Aliquet volutpat risus
              quis aenean eu. Amet vitae aliquam iaculis integer amet, erat.
            </p>
          </div>
        </div>
        <div className=" flex flex-col justify-center space-y-5 mt-24 ">
          <div className="flex justify-center sm:justify-start flex-wrap ">
            Space Rocket worked on this projects
          </div>
          <div className="flex flex-wrap ">
            {fakeProject.map((project, index) => {
              return <Project_Card name={project.name} url={project.url} />;
            })}
          </div>
        </div>
        <div className=" flex flex-col justify-center space-y-5 mt-24">
          <div className="flex justify-center sm:justify-start flex-wrap ">
            We are looking to expand our Squad
          </div>
          <div className="flex justify-center text-justify w-11/12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio at
              porttitor elit, luctus. Leo, dui egestas sit mi tellus et sed
              fermentum mauris. Velit morbi consectetur dolor elementum. Eu
              facilisis condimentum ligula enim. Leo aliquam amet nunc maecenas.
              Justo iaculis aliquam quisque tempor. Nibh venenatis dolor, ut
              mauris sit ipsum malesuada. Lobortis interdum erat scelerisque
              hendrerit duis. Senectus elit justo, purus fringilla faucibus sit
              mi lorem. Amet faucibus sed venenatis purus risus id cursus eget.
              Gravida eget auctor euismod risus ultrices. Aliquet volutpat risus
              quis aenean eu. Amet vitae aliquam iaculis integer amet, erat.
            </p>
          </div>
          <div className="flex justify-center sm:justify-start h-60 w-11/12 ">
            <div className="flex flex-wrap ">
              {freelancers.map((squad, index) => {
                return (
                  <Freelance_Card
                    name={squad.name}
                    job={squad.job}
                    description={squad.description}
                    business={squad.business}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default squad;
