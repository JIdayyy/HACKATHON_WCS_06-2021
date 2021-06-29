import { useQuery } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import { getOneUser } from '../../apollo/userQueries';
import Group_Card from '../../components/Group_Card';

interface ISquad {
  id: string;
  name: string;
  img_url: string;
  description: string;
}

export default function Profil() {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading } = useQuery(getOneUser, { variables: { id } });

  console.log(data);
  console.log(data?.User_by_pk?.user_squads);

  return (
    <div className="flex flex-col h-screen pb-36 text-white items-center sm:items-start overflow-y-auto">
      <div className="bg-white mt-10 w-11/12 sm:w-8/12 bg-opacity-20 rounded-md shadow-inputShadow p-5 sm:py-10">
        <h1 className="text-4xl font-Open font-bold">Welcome to {data?.User_by_pk?.firstname}'s profile</h1>

        <div className="flex mt-5 items-center md:items-start flex-col sm:flex-col">
          <div className="flex flex-col sm:flex-row">
            <div
              className=" h-60 sm:w-96 rounded-md shadow-inputShadow md:w-3/12 md:h-60"
              style={{
                backgroundImage: `url(${data?.User_by_pk?.avatar_url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}></div>

            <div className="sm:ml-10 sm:w-6/12">
              <h2 className="text-2xl font-Open font-bold">
                {data?.User_by_pk?.firstname} {data?.User_by_pk?.lastname}
              </h2>
              <p className="mt-2">{`${data?.User_by_pk?.bio}`}</p>
              <button className="rounded-md w-2/5 p-1 mt-5 text-white bg-buttonBlue focus:outline-none shadow-inputShadow sm:w-2/5">Contact</button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-4xl font-Open font-bold mt-20">My Squads</h2>
      <div className="w-full flex mb-32 flex-wrap">
        {data?.User_by_pk?.user_squads?.map((squad: { Squad: ISquad }, index: number) => {
          return <Group_Card id={squad.Squad.id} name={squad.Squad.name} description={squad.Squad.description} img_url={squad.Squad.img_url} />;
        })}
      </div>
    </div>
  );
}
