import Image from 'next/image';
import { fakeSquad } from '../fakeData';

interface IProps {
  name: string;
  business: string;
  description: string;
  job: string,
}

export default function Freelance_Card({ name, business, description,job }: IProps) {
  return (
    <div className=" transition duration-500   h-96 bg-white bg-blur-xl bg-opacity-20 m-4 flex flex-col items-center shadow-inputShadow align-middle justify-between p-4 rounded-xl text-white transform hover:-translate-y-1 hover:scale-110">
      <Image width={130} height={230} src="/profile_placeholder.png" />
      <div className="w-full h-full flex flex-col items-left align-middle justify-center">
        <div className="text-2xl">{name}</div>
        <div className="text-xl">{business}</div>
        <div className="text-xl">{job}</div>
        <div className="text-xs">{description}</div>
      </div>
      <div className="w-60">
        <button className="text-sm font-bold bg-blue-400 rounded-xl px-4 py-1">Meet the Squad</button>
      </div>
    </div>
  );
}
