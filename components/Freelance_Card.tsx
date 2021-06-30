import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { getOneUser } from '../apollo/userQueries';
import { fakeSquad } from '../fakeData';

interface IProps {
  id: string;
}

export default function Freelance_Card({ id }: IProps) {
  const { data } = useQuery(getOneUser, { variables: { id } });

  return (
    <div className=" transition duration-500   h-96 bg-white bg-blur-xl bg-opacity-20 m-4 flex flex-col items-center shadow-inputShadow align-middle justify-between p-4 rounded-xl text-white transform hover:-translate-y-1 hover:scale-110">
      <Image width={130} height={230} src="/profile_placeholder.png" />
      <div className="w-full h-full flex flex-col items-left align-middle justify-center">
        <div className="text-2xl"></div>
        <div className="text-xl"></div>
        <div className="text-xl"></div>
        <div className="text-xs"></div>
      </div>
      <div className="w-60">
        <button className="text-sm font-bold bg-blue-400 rounded-xl px-4 py-1">
          Fiverr Profil
        </button>
      </div>
    </div>
  );
}
