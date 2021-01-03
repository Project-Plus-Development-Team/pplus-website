import Head from "next/head";
import { Container, Heading, Media, Columns, Image } from "react-bulma-components";

function InfoElement({ title, children, image, position }) {
  const imageComponent =
    <Media.Item renderAs="figure" position={position}>
      <Image src={`images/${image}`} style={{
        width: 300
      }}/>
    </Media.Item>;

  return (
    <Media>
      {position === "left" && imageComponent}
      <Media.Item className="is-align-self-center">
        <Heading subtitle>{title.toUpperCase()}</Heading>
        <p>{children}</p>
      </Media.Item>
      {position === "right" && imageComponent}
    </Media>
  );
}

export default function Knuckles() {
  return (
    <>
      <Head>
        <title>Knuckles</title>
      </Head>
      <Container>
        <Heading>Knuckles</Heading>

        <Columns>
          <Columns.Column size={4}>
            <Image className="knux-main" src="/images/knuckles_transparent.png"/>
          </Columns.Column>

          <Columns.Column>
            <InfoElement title="overview" image="knuckles2.png" position="left">
              Knuckles digs out of development hell and into Project+! The iconic red echidna has been polished and refined to fit in nicely with the existing cast. While technically based on Sonic, Knuckles’s moveset is almost entirely unique, with different normals, specials, and character properties to make him feel completely different than his blue, spiky rival.
            </InfoElement>
            <InfoElement title="rougher than the rest of 'em" image="knuckles3.png" position="right">
              Knuckles digs out of development hell and into Project+! The iconic red echidna has been polished and refined to fit in nicely with the existing cast. While technically based on Sonic, Knuckles’s moveset is almost entirely unique, with different normals, specials, and character properties to make him feel completely different than his blue, spiky rival.
            </InfoElement>
          </Columns.Column>
        </Columns>

        <InfoElement title="drill claw" image="knuckles4.png" position="left">
          Knuckles gains an entirely new move in the form of his Neutral Special, Drill Claw! Pressing B while grounded will make Knuckles dig into the ground, with a strong punch out of it following soon after. Knuckles also has the option to traverse underground for a short time if B is held. Using the move in the air will make Knuckles dive towards the ground, taking any opponents he encounters with him on the way. Using the move to dig through a platform will take any opponents he hits with him, putting them into knockdown. Beware of Drill Claw’s powerful ending punch and its aerial edgeguarding capability!
        </InfoElement>

        <InfoElement title="glide" image="knuckles6.png" position="right">
          Knuckles retains his classic glide from the Sonic the Hedgehog series! In Project+, it becomes a very versatile move, used for both recovery and offense. Once side special is pressed in the air, Knuckles will glide for a considerable amount of time before exiting his glide state, with the ability to turn twice before being forced to continue in his current direction. Knuckles can also cancel the glide early by pressing B, retaining momentum and allowing him to use aerials quickly. Gliding into a wall will allow Knuckles to climb it for up to 3 seconds, enhancing his recovery game. Using Side-Special on the ground (or pressing Z after beginning to glide in the air) has Knuckles use his Dive Punch, a powerful spike and kill move if connected properly!
        </InfoElement>

      </Container>

      <style jsx global>{`
        header ~ .container .subtitle,p {
          filter: drop-shadow(4px 4px 1px hsla(0, 0%, 0%, 0.6));
        }
        
        header ~ .container *:not(.knux-main) > img { // main image has drop-shadow baked into the png
          filter: drop-shadow(8px 8px 2px hsla(0, 0%, 0%, 0.4));
        }
      `}</style>
    </>
  );
}
