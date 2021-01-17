import { Heading, Content } from "react-bulma-components";
import YouTube from "react-youtube";
import SmartImage from "../components/smart-image";

export default function Home() {
  return (
    <>
      <div className="grid-content" style={{
        display: "grid",
        gridTemplateColumns: "1fr max-content",
        gridTemplateRows: "min-content 1fr",
        gap: "2em 2em",
        gridTemplateAreas: "'text picture' 'youtube youtube'",
        alignItems: "center"
      }}>
        <div
          className="is-flex is-justify-content-center"
          style={{gridArea: "picture"}}
        >
          <SmartImage
            img={require(`../public/images/falco-glowy.png?size=300`)}
            webp={require(`../public/images/falco-glowy.png?webp&size=300`)}
            alt="Glowy, translucent Falco"
            className="falco"
          />
        </div>

        <div style={{gridArea: "youtube"}}>
          <YouTube
            videoId="z_Hm9FBMz1M"
            containerClassName="youtube-container"
          />
        </div>

        <div style={{gridArea: "text"}}>
          <Heading>Project+ is...</Heading>
          <Content>
            <ul>
              <li>is a community driven patch for Project M</li>
              <li>strives to invigorate the Project M experience</li>
              <li>further balances the roster</li>
              <li>fixes lingering 3.6 bugs</li>
              <li>gives the entire UI a fresh coat of paint</li>
              <li>adjusts movesets to be more fun to play with and against</li>
              <li>introduces new gameplay mechanics to Project M</li>
              <li>includes new features such as those created by the Legacy TE team for Legacy TE 2.5.</li>
            </ul>
          </Content>
        </div>
      </div>

      <style jsx>{`
        ul > * {
          font-size: 20px;
        }

        .falco {
          margin: auto;
          opacity: 0.7;
          transition: opacity 0.3sease;
        }

        .falco:hover {
          opacity: 1.0;
        }
      `}</style>

      <style jsx global>{`
        @media only screen and (max-width: 768px) {
          .grid-content {
            grid-template-columns: 1fr !important;
            grid-template-areas: 'text' 'youtube' 'picture' !important;
          }
        }
      `}</style>
    </>
  );
}