import { Container, Columns, Heading, Content } from "react-bulma-components";
import YouTube from "react-youtube";
import SmartImage from "../components/smart-image";

export default function Home() {
  return (
    <Container renderAs="main">
      <div className="is-flex is-flex-direction-column is-align-items-center">
        <Heading>Release Trailer</Heading>
        <YouTube videoId="z_Hm9FBMz1M" opts={{
          width: "310",
          height: "174"
        }}/>
      </div>
      
      <Columns>
        <Columns.Column>
          <Heading>What is Project Plus?</Heading>
          <p>Project Plus:</p>
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
        </Columns.Column>

        <Columns.Column style={{display: 'flex', flexDirection: "row-reverse"}}>
          <SmartImage
            img={require(`../public/images/falco-glowy.png?size=328`)}
            webp={require(`../public/images/falco-glowy.png?webp&size=328`)}
            alt="Glowy, Translucent Falco"
            className="falco"
          />
        </Columns.Column>
      </Columns>
      <style jsx global>{`
        .falco {
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .falco:hover {
          opacity: 1.0;
        }
      `}</style>
    </Container>
  );
}