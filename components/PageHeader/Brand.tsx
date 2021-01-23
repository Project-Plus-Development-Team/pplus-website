import Link from "next/link";
import React from "react";
import { Navbar } from "react-bulma-components";
import SmartImage from "../smart-image";

interface BrandProps {
  isNavbarActive: boolean
  setNavbarActive: React.Dispatch<React.SetStateAction<boolean>>
  isHome: boolean
}

export default function Brand({ isNavbarActive, setNavbarActive, isHome }: BrandProps) {
  const handleBurgerClick = () => setNavbarActive(!isNavbarActive);

  const [eggCounter, setEggCounter] = React.useState(1);
  const [spin, setSpin] = React.useState(false);
  const [useAltSpin, setUseAltSpin] = React.useState(false);

  const [spin1Audio, setSpin1Audio] = React.useState<HTMLAudioElement|null>(null);
  const [spin2Audio, setSpin2Audio] = React.useState<HTMLAudioElement|null>(null);

  function egg() {
    if (!isHome) {
      return;
    }

    if (eggCounter >= 5) { // if approaching easter egg
      if (!useAltSpin && !spin1Audio) { // and we want spin 1 and it's not set
        setSpin1Audio(new Audio("/spin1.mp3")); // these start loading the audio so it's ready
      }

      if (useAltSpin && !spin2Audio) { // or we want spin 2 and it's not set
        setSpin2Audio(new Audio("/spin2.mp3"));
      }
    }

    if (eggCounter >= 15) {
      setEggCounter(0);

      const spinAudio = useAltSpin ? spin2Audio : spin1Audio;
      spinAudio.volume = 0.3;
      spinAudio.play().then(() => {
        setSpin(true);

        setTimeout(() => {
          setSpin(false);
          setUseAltSpin(!useAltSpin);
        }, 3000);
      });

      return;
    }

    setEggCounter(eggCounter + 1);
  }

  // TODO cleanup the following code maybe?

  return (
    <Navbar.Brand style={{margin: 0}}>
      <Navbar.Item renderAs="div" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <Link href="/">
          <a
            style={{ lineHeight: 1 }}
            title={isHome ? "You're already on the home page" : ""}
            onClick={egg}
            className={"logo " + (spin ? `spin${useAltSpin ? 2 : 1}` : "")}
          >
            <SmartImage
              img={require("../../public/images/logo.png?size=178")}
              webp={require("../../public/images/logo.png?size=178&webp")}
              width="178"
              height="40"
              alt="Project Plus Logo"
            />
          
            <style jsx global>{`            
              .logo.spin1 {
                transition: transform 3s ease-out;
                transform: rotateZ(6turn);
              }
              
              .logo.spin2 {
                transition: transform 3s ease-out;
                transform: rotateZ(12turn);
              }
            `}</style>
          </a>
        </Link>
      </Navbar.Item>
      <Navbar.Burger onClick={handleBurgerClick} aria-label="Burger menu toggle"/>
    </Navbar.Brand>
  );
}