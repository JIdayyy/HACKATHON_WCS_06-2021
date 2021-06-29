import React from "react";
import { fakeSquad } from "../../fakeData";
import Group_Card from "../../components/Group_Card";
import { useQuery } from "@apollo/client";
import { getSquads } from "../../apollo/squadQueries";
import { groupEnd } from "console";

function squad() {
  const { data, loading } = useQuery(getSquads);
  return (
    <div className="h-screen overflow-y-auto w-full  ">
      <div className=" flex flex-col items-center w-full">
        <div className=" flex mb-60 justify-center sm:justify-start flex-wrap">
          {data?.Squad.map(
            (
              group: { id: string; name: string; description: string },
              index: number
            ) => {
              return (
                <Group_Card
                  key={index}
                  id={group.id}
                  name={group.name}
                  description={group.description}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default squad;
