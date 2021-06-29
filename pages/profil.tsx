import Project_Card from "../components/Project_Card copy";
import { fakeProject } from "../fakeData";

export default function Profil() {
  return (
    <div className="flex flex-col h-full pb-36  text-white items-center sm:items-start  ">
      <div className="flex flex-col w-11/12 sm:w-3/12 lg:w-8/12">
        <div className="text-2xl">
          <h1>Welcome to Julia's profile</h1>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className=" h-40 w-5/6 mt-2 bg-gray-500 rounded-md md:w-3/12">
            photo
          </div>
        </div>
        <div className="">
          <h2 className="mt-5 text-lg font-bold">Julia Matth</h2>
          <p className="">Translater English/ Polish</p>
          <p>
            Working in{" "}
            <a href="/squadProfil" class="underline">
              IA translater Squad
            </a>
          </p>
          <a href="" class="underline">
            Fiverr Profile
          </a>
        </div>
        <div className="text-justify mt-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio at
            porttitor elit, luctus. Leo, dui egestas sit mi tellus et sed
            fermentum mauris. Velit morbi consectetur dolor elementum. Eu
            facilisis condimentum ligula enim. Leo aliquam amet nunc maecenas.
            Justo iaculis aliquam quisque tempor. Nibh venenatis dolor, ut
            mauris sit ipsum malesuada. Lobortis interdum erat scelerisque
            hendrerit duis. Senectus elit justo, purus fringilla faucibus sit mi
            lorem. Amet faucibus sed venenatis purus risus id cursus eget.
            Gravida eget auctor euismod risus ultrices. Aliquet volutpat risus
            quis aenean eu. Amet vitae aliquam iaculis integer amet, erat.{" "}
          </p>
        </div>
        <div className="flex justify-end">
          <button className="rounded-md w-2/5 p-1 mt-5 text-white bg-buttonBlue focus:outline-none shadow-inputShadow sm:w-1/5">
            Contact
          </button>
        </div>
        <div className="">
          <h2 className="text-xl">Projects</h2>
          <div>
            <div className="flex flex-wrap w-full ">
              {fakeProject.map((project, index) => {
                return <Project_Card name={project.name} url={project.url} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
