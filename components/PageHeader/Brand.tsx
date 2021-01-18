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

  function egg() {
    if (!isHome) {
      return;
    }

    if (eggCounter >= 15) {
      setEggCounter(0);
      setSpin(true);

      const spinAudio = new Audio(`/spin${useAltSpin ? 2 : 1}.mp3`);
      spinAudio.volume = 0.3;
      spinAudio.play();

      setTimeout(() => {
        setSpin(false);
        setUseAltSpin(!useAltSpin);
      }, 3000);

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
      <Navbar.Burger onClick={handleBurgerClick}/>
    </Navbar.Brand>
  );
}