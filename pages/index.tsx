import { Container, Columns, Heading, Content } from "react-bulma-components";

export default function Home() {
  return (
    <>
      <Container renderAs="main">
        <div className="is-flex is-flex-direction-column is-align-items-center">
          <Heading>Release Trailer</Heading>
          <iframe src="https://www.youtube.com/embed/z_Hm9FBMz1M"/>
        </div>

        {/* <Columns.Column size="half" offset="one-quarter" className="center-text">
          <Heading className="center-text">Release Trailer</Heading>
        </Columns.Column> */}
        
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
            <img src="images/Falco.png" alt="Translucent Falco" className="magic"/>
          </Columns.Column>
        </Columns>
      </Container>

      {/* <footer>
      </footer> */}

      <style jsx>{`
        .magic {
          opacity: 0.7;
          transition: all 0.3s ease;
        
          max-height: 400px;
        }
        
        @media screen and (max-width: 768px) {
          .magic {
            max-height: 300px;
          }
        }
        
        .magic:hover {
          opacity: 1.0;
        }

        .center-text {
            text-align: center;
            width: 100%;
        }

        .columns {
            flex-wrap: wrap;
        }

        iframe {
            width: 560px;
            height: 316px;
            margin-bottom: 26px;
        }
      `}</style>

      <style jsx global>{`

      `}</style>
    </>
  );
}