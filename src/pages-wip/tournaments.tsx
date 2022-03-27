// @ts-nocheck // TODO

import { useState } from "react";
import { Heading } from "react-bulma-components";
import { RegionFilter } from "../modules/tournaments/RegionFilter";
import { TournamentStates } from "../modules/tournaments/TournamentStates";
import { useTournaments } from "../modules/tournaments/use-tournament";

const Tournaments = () => {
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
};

export default Tournaments;