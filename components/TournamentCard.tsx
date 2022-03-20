import { Card, Heading } from "react-bulma-components";
import { DiscordButton } from "./DiscordButton";
import { SmashGGButton } from "./SmashGGButton";
import { TwitchButton } from "./TwitchButton";

interface Props {
  tournament: any
}

export const TournamentCard = ({ tournament }: Props) => {
  const dateString = [tournament.startDate, tournament.endDate]
    .filter(dateString => dateString)
    .map(dateString => (
      new Date(dateString).toLocaleDateString(undefined, {
        dateStyle: "full",
        // year: "2-digit"
      })
    ))
    .join(" - ");

  return (
    <Card className="p-2 mt-3">
      <div className="is-flex">
        <Heading size={4} className="mb-2 mr-auto">
          <a href={`https://smash.gg/tournament/${tournament.smashggSlug}`}>
            {tournament.name}
          </a>
        </Heading>
        {tournament.discordInviteId && (
          <DiscordButton className="mr-2" inviteId={tournament.discordInviteId}/>
        )}
        {tournament.twitchChannelName && (
          <TwitchButton className="mr-2" channelId={tournament.twitchChannelName}/>
        )}
        <SmashGGButton slug={tournament.smashggSlug}/>
      </div>
      <p>
        <strong>Region:</strong> {tournament.region},{" "}
        <strong>Location:</strong> {tournament.address}
        <br/>
        <strong>Date:</strong> {dateString}
        <br/>
        <strong>Brackets:</strong>{" "}
        <ul style={{
          listStyle: "inside",
          display: "inline"
        }}>
          {tournament.brackets.map((bracket, j) => (
            <li
              key={j}
              style={{ display: "inline" }}
            >
              {j !== 0 ? " • " : ""}
              {bracket}
            </li>
          ))}
        </ul>
      </p>
    </Card>
  );
};