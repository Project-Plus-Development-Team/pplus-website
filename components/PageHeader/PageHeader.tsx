import { useRouter } from "next/router";
import { Section, Container, Navbar } from "react-bulma-components";
import ButtonContainer from "./ButtonContainer";
import LinkContainer from "./LinkContainer";
import styles from "./PageHeader.module.scss";


function Brand() {
  return (
    <Navbar.Brand>
      <Navbar.Item renderAs="div" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <img src="/images/projectplus_logo_small.png" style={{maxHeight: "2.5rem"}}/>
      </Navbar.Item>
      <Navbar.Burger/>
    </Navbar.Brand>
  );
}

export default function PageHeader() {
  const router = useRouter();

  return (
    <Section renderAs="header">
      <Container>
        <Navbar color="dark" className={styles.navbar + " pl-3 pr-2"}>
          <Brand/>
          <Navbar.Menu>
            <LinkContainer pathname={router.pathname}/>
            <ButtonContainer/>
          </Navbar.Menu>
        </Navbar>
      </Container>
    </Section>
  );
}
