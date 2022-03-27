import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { Navbar } from "react-bulma-components";
import { GoodImage } from "shared/components/GoodImage";

import logo from "~generated-images/logo.webp";
import { useEgg } from "./use-egg";

interface BrandProps {
  isNavbarActive: boolean
  setNavbarActive: Dispatch<SetStateAction<boolean>>
  isHome: boolean
}

export const Brand = ({
  isNavbarActive, setNavbarActive, isHome
}: BrandProps) => {
  const { egg, spin, useAltSpin } = useEgg();

  // TODO cleanup the following code maybe?

  return (
    <Navbar.Brand style={{margin: 0}}>
      <Navbar.Item renderAs="div" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <Link href="/">
          <a
            style={{ lineHeight: 1 }}
            title={isHome ? "You're already on the home page" : ""}
            onClick={() => {
              if (isHome) {
                egg();
              }
            }}
            className={"logo " + (spin ? `spin${useAltSpin ? 2 : 1}` : "")}
          >
            <GoodImage
              img={logo}
              alt="Project Plus Logo" // TODO shrink?
              style={{
                width: 178,
                height: 40
              }}
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
      <Navbar.Burger
        onClick={() => setNavbarActive(!isNavbarActive)}
        aria-label="Burger menu toggle"
      />
    </Navbar.Brand>
  );
};