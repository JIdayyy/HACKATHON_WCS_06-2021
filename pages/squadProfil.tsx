import React from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import { fakeSquad } from "../fakeData";
import Group_Card from "../components/Group_Card";
import SquadTeamProfil from "../components/SquadTeamProfil";

function squad() {
  return (
    <div className="  h-screen overflow-y-auto w-full  ">
      <SquadTeamProfil />
    </div>
  );
}

export default squad;
