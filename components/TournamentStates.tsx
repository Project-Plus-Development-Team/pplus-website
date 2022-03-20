import { Heading } from "react-bulma-components";
import { TournamentCard } from "./TournamentCard";

interface Props {
  tournaments: any[]
  filter: string
}

export const TournamentStates = ({ tournaments, filter }: Props) => {
  if (tournaments === null) {
    return <Heading>Loading...</Heading>;
  }

  if (tournaments.length === 0) {
    return <Heading>No tournaments available.</Heading>;
  }

  const filteredTournaments = tournaments.filter(tourn => {
    if (filter === "all") {
      return true;
    }

    return tourn.regionTags.includes(filter);
  });

  if (filteredTournaments.length === 0) {
    return <Heading>No tournaments using these filters.</Heading>;
  }

  console.log("filtered", filteredTournaments);

  return (
    <>
      {filteredTournaments
        .sort((a, b) => a.startDate[0] > b.startDate[0] ? -1 : 0)
        .map((tourn, index) => (
          <TournamentCard tournament={tourn} key={index}/>
        ))
      }
    </>
  );
};