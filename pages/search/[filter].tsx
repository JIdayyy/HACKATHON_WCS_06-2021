import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { searchSquad } from '../../apollo/squadQueries';
import { userSearch } from '../../apollo/userQueries';
import FreelanceCard from '../../components/FreelanceCard2';
import Group_Card from '../../components/Group_Card';

function SearchPage() {
  const router = useRouter();
  const { filter } = router.query;
  const { data: squadsDatas } = useQuery(searchSquad, {
    variables: { filter: `%${filter}%` },
  });
  console.log(squadsDatas);
  const { data: usersDatas } = useQuery(userSearch, {
    variables: { filter: `%${filter}%` },
  });
  console.log(usersDatas);

  return (
    <div className="h-screen flex flex-col items-center overflow-y-auto w-full  ">
      <div className=" flex flex-col items-start w-full">
        <h3 className="text-white font-Open font-bold text-3xl">
          Users with {filter} keyword ({usersDatas?.User.length})
        </h3>
        <div className="ease-in-out flex justify-center sm:justify-start flex-wrap">
          {usersDatas?.User.map((squad: { id: string }) => {
            return <FreelanceCard id={squad.id} />;
          })}
        </div>
        <h3>
          Squads with {filter} keyword ({squadsDatas?.Squad.length})
        </h3>
        <div className=" flex items-center w-full">
          {squadsDatas?.Squad.map((group: { id: string; name: string; description: string; index: number; img_url: string }) => {
            return <Group_Card id={group.id} name={group.name} description={group.description} img_url={group.img_url} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
