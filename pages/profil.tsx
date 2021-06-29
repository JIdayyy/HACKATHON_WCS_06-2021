export default function Profil() {
  return (
    <div className="flex flex-col w-full  text-white items-center overflow-y-auto">
      <div className="flex flex-col w-11/12 md:w-10/12 lg:w-8/12">
        <div className="">
          <h1>Welcome to Julia's profile</h1>
        </div>
        <div className="flex flex-col">
          <div className="h-40 w-40 bg-gray-500">photo</div>
          <div className="">
            INFOS
            <h2>Julia Matth</h2>
            <p>Translater English/ Polish</p>
            <p>
              Working in <a href="/squadProfil">IA translater Squad</a>
            </p>
            <a href="">Fiverr Profile</a>
          </div>
        </div>
        <div className="text-justify">
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
        <div className="">
          <button className="rounded-md p-1 mt-5 text-white bg-buttonBlue focus:outline-none shadow-inputShadow">
            Contact
          </button>
        </div>
        <div className="">
          <h2>Projects</h2>
          <div>cards</div>
        </div>
      </div>
    </div>
  );
}
