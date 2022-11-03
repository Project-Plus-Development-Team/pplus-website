import { Box, Button } from "react-bulma-components";
import { Content } from "react-bulma-components";
import styles from "../modules/Learn.module.scss"

export default function Learn() {
  return (
    <main className={styles.main}>
      <Content className={styles.nav}>
        <nav>
          <ul>
            <li>
              <a href="#getting-started" className="is-3 navbar-item">
                Getting started
              </a>
            </li>
            <li>
              <a href="#practice" className="is-3 navbar-item">
                Practice
              </a>
            </li>
            <li>
              <a href="#create-content" className="is-3 navbar-item">
                Create content
              </a>
            </li>
            <li>
              <a href="#customize" className="is-3 navbar-item">
                Customize
              </a>
            </li>
          </ul>
        </nav>
      </Content>
      <section style={{ flex: 1 }}>
        <a id="getting-started" className="title">
          Getting started
        </a>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          <Box className={styles.tile}>hellawizagwizugdwzio</Box>
          <Box className={styles.tile}>
          <Button style={{ backgroundColor: "red" }} renderAs="a" href="https://example.com">
            hello
          </Button>
          </Box>
          <Box className={styles.tile}>hello</Box>
          <Box className={styles.tile}>hello</Box>
          <Box className={styles.tile}>hello</Box>
          <Box className={styles.tile}>hello</Box>
          <Box className={styles.tile}>hello</Box>
          <Box className={styles.tile}>hello</Box>
          <Box className={styles.tile}>hello</Box>
          <Box className={styles.tile}>hello</Box>
        </div>
        <a id="practice" className="title">
          Practice
        </a>
        <Box>hello</Box>
        <a id="create-content" className="title">
          Create content
        </a>
        <Box>hello</Box>
        <a id="customize" className="title">
          Customize
        </a>
        <Box>hello</Box>
      </section>
    </main>
  );
}
