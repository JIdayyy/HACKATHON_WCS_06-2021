import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  id: string;
  name: string;
  description: string;
  img_url: string;
}

export default function Group_Card({ id, name, description, img_url }: IProps) {
  return (
    <div className=" transition duration-500 w-11/12 sm:w-60 h-96 bg-white bg-blur-xl bg-opacity-20 m-4 flex flex-col items-center shadow-inputShadow align-middle justify-between p-4 rounded-xl text-white transform hover:-translate-y-1 hover:scale-110">
      <div
        className="h-60 w-52 rounded-md shadow-buttonShadow"
        style={{
          backgroundImage: `url(${img_url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
      <div className="w-full h-full flex flex-col items-left align-middle justify-center">
        <div className="text-2xl">{name}</div>
        <p className="text-xs h-28 mt-2 overflow-ellipsis overflow-hidden">
          {description}
          {'...'}
        </p>
      </div>
      <div className="w-full">
        <Link href={`/squad/${id}`}>
          <button className="ransition duration-500 text-sm font-bold bg-blue-400 rounded-md px-4 py-1 hover:-translate-y-1 hover:scale-105">
            Meet the Squad
          </button>
        </Link>
      </div>
    </div>
  );
}
