import Image from 'next/image';

interface IProps {
  key: number;
  name: string;
  url: string;
}

export default function Project_Card({ key, name, url }: IProps) {
  return (
    <div
      key={key}
      className="transition duration-500 w-11/12 my-5 mx-4 sm:w-72 h-56 bg-white bg-blur-xl bg-opacity-20 sm:m-4 flex flex-col items-center shadow-inputShadow align-middle justify-between p-4 rounded-xl text-white transform hover:-translate-y-1 hover:scale-110">
      <div
        className="sm:h-60 sm:w-60 w-80 h-96 rounded-md shadow-buttonShadow"
        style={{
          backgroundImage: `url(${url}})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>

      <h1 className="text-2xl mt-2 font-bold">{name}</h1>
    </div>
  );
}
