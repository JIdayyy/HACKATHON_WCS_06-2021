import Image from "next/image";

interface IProps {
  name: string;
  url: string;
}

export default function Project_Card({ name, url }: IProps) {
  return (
    <div className=" transition duration-500  w-full sm:w-60 h-96 bg-white bg-blur-xl bg-opacity-20 m-4 flex flex-col items-center shadow-inputShadow align-middle justify-between p-4 rounded-xl text-white transform hover:-translate-y-1 hover:scale-110">
      <Image width={130} height={230} src="/profile_placeholder.png" />
      <div className="w-full h-full flex flex-col items-left align-middle justify-center">
        <div className="text-2xl">{name}</div>
        <div className="text-xl">{url}</div>
      </div>
      <div className="w-60">
        <button className="text-sm font-bold bg-blue-400 rounded-xl px-4 py-1">
          Meet the Squad
        </button>
      </div>
    </div>
  );
}
