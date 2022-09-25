import { Handler } from "@netlify/functions";
import axios from "axios";
import { getShortModNameOfStream } from "modules/watch/streams/functions/get-mod-of-stream";
import { TwitchStreamsResponse } from "modules/watch/streams/twitch-api";

const brawlId = "18833";
const fakeProjectMId = "914675685";
const meleeId = "16282";
const url = `https://api.twitch.tv/helix/streams?game_id=${brawlId}&game_id=${fakeProjectMId}&game_id=${meleeId}&first=100`;
// const url = `https://api.twitch.tv/helix/streams?first=10`;

const clientSecret = process.env.TWITCH_CLIENT_SECRET;
const clientId = process.env.TWITCH_CLIENT_ID;

if (clientSecret === undefined) {
  throw new Error("Twitch Client Secret not available in environment");
}

if (clientId === undefined) {
  throw new Error("Twitch Client Id not available in environment");
}

let accessToken: string | null = null;

const refreshAccessToken = async () => {
  const { data } = await axios.post<{ access_token: string }>(
    "https://id.twitch.tv/oauth2/token",
    {
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "client_credentials",
    }
  );

  accessToken = data.access_token;
};

const getStreams = async (isRetry = false): Promise<string> => {
  if (accessToken === null) {
    await refreshAccessToken();
  }

  try {
    const { data } = await axios.get<TwitchStreamsResponse>(url, {
      headers: {
        Authorization: `Bearer ${accessToken as string}`,
        "Client-Id": clientId,
      },
    });

    return JSON.stringify(data.data.filter(getShortModNameOfStream));
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      (error.response?.data as { message: string }).message === "Invalid OAuth token" &&
      !isRetry
    ) {
      await refreshAccessToken();
      return getStreams(true);
    } else {
      throw error;
    }
  }
};

export const handler: Handler = async () => {
  try {
    return {
      statusCode: 200,
      body: await getStreams(),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        statusCode: 500,
        body: (error.response?.data as { message: string }).message ?? "Unknown request error"
      };
    }

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "An unknown error occurred",
        message: `Serialized error: ${JSON.stringify(error)}`,
      }),
    };
  }
};
