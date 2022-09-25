import { useEffect, useState } from "react";
import { TwitchStreamI } from "../twitch-api";

export const useStreams = (isDev: boolean) => {
  const [streams, setStreams] = useState<TwitchStreamI[]|null>(null);
  const [error, setError] = useState<Error|null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOnCooldown, setIsOnCooldown] = useState(true);

  const devPrefix = "http://localhost:9999";
  const prefix = isDev ? devPrefix : "";

  const reload = () => {
    setIsLoading(true);

    setIsOnCooldown(true); // prevent spamming a little bit
    setTimeout(() => {
      setIsOnCooldown(false);
    }, 2000);

    fetch(`${prefix}/.netlify/functions/streams`)
      .then(r => r.json())
      .then(json => {
        setStreams(json);
        setIsLoading(false);
      })
      .catch(setError);
  };

  useEffect(() => {
    if (streams === null) {
      reload();
    }
  }, [streams]);

  return {
    streams: streams ?? [],
    isLoading: isLoading,
    error,
    reload,
    isOnCooldown
  };
};