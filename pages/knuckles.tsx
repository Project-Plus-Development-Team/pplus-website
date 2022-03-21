import Head from "next/head";
import { Heading, Columns } from "react-bulma-components";

import images from "~capsules/knuckles";

interface StaticImageImport {
  src: string
  height: number
  width: number
}

interface InfoElementProps {
  title: string
  img: string | StaticImageImport
  children: string
  reverse?: boolean
  color: string
}

function InfoElement({ title, img, children, reverse, color }: InfoElementProps) {
  const src = typeof img === "string" ? img : img.src;
  const reverseClass = reverse ? "is-flex-direction-row-reverse" : "";

  return (
    <div
      className={`info-element ${reverseClass}`}
      style={{ backgroundColor: color }}
    >
      <img src={src}/>
      <div className="is-align-self-center" style={{ minWidth: 200 }}>
        <Heading subtitle weight="light" size={3}>{title.toUpperCase()}</Heading>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default function Knuckles() {
  return (
    <>
      <Head>
        <title>Knuckles</title>
      </Head>
      <Heading>Knuckles</Heading>

      <Columns>
        <Columns.Column size={4} style={{ alignSelf: "flex-start" }}>
          <img
            src={images.glowy.src}
            className="bind-inner"
            alt="Knuckles with a glow"
          />
        </Columns.Column>

        <Columns.Column>
          <InfoElement title="overview" img={images.punch.src} color="hsl(2deg 54% 52%)">
            Knuckles digs out of development hell and into Project+! The iconic red echidna has been polished and refined to fit in nicely with the existing cast. While technically based on Sonic, Knuckles’s moveset is almost entirely unique, with different normals, specials, and character properties to make him feel completely different than his blue, spiky rival.
          </InfoElement>
          <InfoElement title="rougher than the rest of 'em" img={images.upsmash.src} reverse color="#458d3e">
            Originally designed as a stronger version of Sonic, Knuckles&apos;s moveset obviously has some heavy hitters. His forward aerial is similar to Mario’s, having both a strong outward sending hitbox as well as a meteor on the descent. His down and up tilts are both incredible combo starters that lead into his fast and powerful aerials. Up Smash is a destructive punch upwards that can shark platforms and set opponents ablaze. Knuckles retains Spin Dash, but adds in different properties to make his version unique.
          </InfoElement>
        </Columns.Column>
      </Columns>

      <InfoElement title="drill claw" img={images["drill-claw"].src} color="#5c677c">
        Knuckles gains an entirely new move in the form of his Neutral Special, Drill Claw! Pressing B while grounded will make Knuckles dig into the ground, with a strong punch out of it following soon after. Knuckles also has the option to traverse underground for a short time if B is held. Using the move in the air will make Knuckles dive towards the ground, taking any opponents he encounters with him on the way. Using the move to dig through a platform will take any opponents he hits with him, putting them into knockdown. Beware of Drill Claw’s powerful ending punch and its aerial edgeguarding capability!
      </InfoElement>

      <InfoElement title="glide" img={images.glide.src} reverse color="#a9842b">
        Knuckles retains his classic glide from the Sonic the Hedgehog series! In Project+, it becomes a very versatile move, used for both recovery and offense. Once side special is pressed in the air, Knuckles will glide for a considerable amount of time before exiting his glide state, with the ability to turn twice before being forced to continue in his current direction. Knuckles can also cancel the glide early by pressing B, retaining momentum and allowing him to use aerials quickly. Gliding into a wall will allow Knuckles to climb it for up to 3 seconds, enhancing his recovery game. Using Side-Special on the ground (or pressing Z after beginning to glide in the air) has Knuckles use his Dive Punch, a powerful spike and kill move if connected properly!
      </InfoElement>

      <style jsx global>{`

        .info-element {
          display: flex;
          justify-content: space-between;
          margin-bottom: 3em;
          background-color: hsl(11deg 77% 34%);
          border-radius: 0.5em;
          overflow: hidden;
        }

        .info-element > div {
          padding: 1em;
        }

        .info-element > img {
          object-fit: cover;
          flex: 1;
        }

        .info-element > * {
          // align-self: flex-start;
        }

        @media screen and (max-width: 647px) {
          .info-element {
            flex-wrap: wrap;
            justify-content: center !important;
          }
        }

        @media screen and (max-width: 1215px) {
          .columns {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}
