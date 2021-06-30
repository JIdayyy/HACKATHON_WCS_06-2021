import { useQuery } from '@apollo/client';
import { getOneUser } from '../apollo/userQueries';
import Link from 'next/link';

function FreelanceCard({ id }: { id: string }): JSX.Element {
  const { data, loading } = useQuery(getOneUser, { variables: { id } });
  console.log(data);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="transition mx-4 duration-500 w-11/12 my-4 sm:w-60 h-80 bg-white bg-blur-xl bg-opacity-20 sm:m-4 flex flex-col items-center shadow-inputShadow align-middle justify-between p-4 rounded-xl text-white transform hover:-translate-y-1 hover:scale-110">
      <div
        className="sm:h-60 sm:w-52 w-80 h-80 rounded-md shadow-buttonShadow"
        style={{
          backgroundImage: `url(${data?.User_by_pk.avatar_url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="w-full h-full flex flex-col items-left align-middle justify-center">
        <div className="flex">
          <p className="text-xl font-bold">{data?.User_by_pk.firstname} / </p>
          <p className="text-xl font-bold">{data?.User_by_pk.lastname}</p>
        </div>
        <p className="text-xs overflow-hidden h-20 mt-1">
          {data?.User_by_pk.bio}
        </p>
        <div className="text-xs"></div>
      </div>
      <div className="w-full">
        <Link href={`/profile/${data?.User_by_pk.id}`}>
          <a className="text-sm font-bold bg-blue-400 rounded-md px-4 py-1">
            Fiverr Profil
          </a>
        </Link>
      </div>
    </div>
  );
}
export default FreelanceCard;
