import { GetStaticProps } from "next";
import { useEffect, useState } from "react";

interface Props {
  isDev: boolean
}

const Home = ({ isDev }: Props) => {
  const [streams, setStreams] = useState<null|any[]>(null);

  const devPrefix = "http://localhost:9999";
  const prefix = isDev ? devPrefix : "";

  useEffect(() => {
    if (streams === null) {

      fetch(`${prefix}/.netlify/functions/streams`)
        .then(r => r.json())
        .then(json => {
          setStreams(json);
        });
    }
  }, [streams]);

  return (
    <main>
      {streams === null ? (
        <p>Loading...</p>
      ) : (
        streams.length === 0 ? (
          <p>No streams currently.</p>
        ) : (
          <>
            {streams.map(stream => (
              <div key={stream.user_id}>
                <p>{stream.title}</p>
                <p>Watch: <a href={`https://twitch.tv/${stream.user_login}`}>Twitch</a></p>
              </div>
            ))}
          </>
        )
      )}
    </main>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      isDev: process.env.NODE_ENV === "development"
    }
  };
};