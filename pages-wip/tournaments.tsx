import { useState } from "react";
import { Heading } from "react-bulma-components";
import { RegionFilter } from "../components/RegionFilter";
import { TournamentStates } from "../components/TournamentStates";
import { useTournaments } from "../hooks/use-tournament";

export default function Tournaments() {
  const [filter, setFilter] = useState("all");
  const tournaments = useTournaments();

  return (
    <>
      <div className="is-flex is-align-items-center">
        <Heading className="m-0">Tournaments</Heading>
        <RegionFilter
          filter={filter}
          setFilter={setFilter}
          tournaments={tournaments}
        />
      </div>
      <TournamentStates
        tournaments={tournaments}
        filter={filter}
      />
    </>
  );
}