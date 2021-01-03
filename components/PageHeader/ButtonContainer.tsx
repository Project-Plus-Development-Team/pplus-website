import Link from "next/link";
import { Navbar, Button, Icon } from "react-bulma-components";
import styles from "./PageHeader.module.scss";

export default function ButtonContainer() {
  return (
    <Navbar.Container position="end">
      <Navbar.Item renderAs="div"> {/* <a> is default and gets an ugly shadow */}
        <div className="field is-grouped">
          <div className="control">
            <Link href="/download">
              <Button color="link" className="has-text-weight-bold">
                <Icon>
                  <span className="fas fa-download"/>
                </Icon>
                <span>Download v2.2</span>
              </Button>
            </Link>
          </div>
          <div className="control">
            <a href="/discord">
              <Button color="link" className={styles.discordbutton}>
                <Icon>
                  <span className="fab fa-discord"/>
                </Icon>
                <span>Discord Server</span>
              </Button>
            </a>
          </div>
        </div>
      </Navbar.Item>
    </Navbar.Container>
  );
}