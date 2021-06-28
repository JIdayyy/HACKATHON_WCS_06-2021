import Image from 'next/image';
import { fakeSquad } from '../fakeData';

interface IProps {
  name: string;
  buisness: string;
  description: string;
}

export default function Group_Card({ name, buisness, description }: IProps) {
  return (
    <div className="w-11/12 sm:w-64 h-96 bg-white bg-opacity-20 m-4 flex flex-col items-center shadow-inputShadow align-middle justify-between p-4 rounded-xl text-white">
      <Image width={120} height={230} src="/profile_placeholder.png" />
      <div className="w-full h-full flex flex-col items-left align-middle justify-center">
        <div className="text-2xl">{name}</div>
        <div className="text-xl">{buisness}</div>
        <div className="text-xs">{description}</div>
      </div>
      <div className="w-full">
        <button className="text-sm font-bold bg-blue-400 rounded-xl px-4 py-1">Meet the Squad</button>
      </div>
    </div>
  );
}
