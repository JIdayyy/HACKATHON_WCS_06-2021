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
  const { data: usersDatas } = useQuery(userSearch, {
    variables: { filter: `%${filter}%` },
  });

  return (
    <div className="h-screen overflow-y-auto w-full  ">
      <div className=" flex flex-col items-center w-full">
        <h3>
          Users with {filter} keyword ({usersDatas?.User.length})
        </h3>
        <div className="ease-in-out flex mb-60 justify-center sm:justify-start flex-wrap">
          {usersDatas?.User.map((squad: { id: string }) => {
            return <FreelanceCard key={squad.id} id={squad.id} />;
          })}
        </div>
        <h3>
          Squads with {filter} keyword ({squadsDatas?.Squad.length})
        </h3>
        <div className=" flex items-center w-full">
          {squadsDatas?.Squad.map(
            (group: {
              id: string;
              name: string;
              description: string;
              index: number;
              img_url: string;
            }) => {
              return (
                <Group_Card
                  key={group.id}
                  id={group.id}
                  name={group.name}
                  description={group.description}
                  img_url={group.img_url}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
