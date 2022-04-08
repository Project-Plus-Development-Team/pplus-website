import { Content, Heading } from "react-bulma-components";

import styles from "../Home.module.scss";

export const WhatIsPPlus = () => (
  <div style={{gridArea: "text"}}>
    <Heading>What is Project+?</Heading>
    <Heading subtitle marginless>Project+...</Heading>
    <Content>
      <ul className={styles.list}>
        <li>is a community driven patch for Project M, a game modification for Super Smash Bros. Brawl</li>
        <li>strives to invigorate the Project M experience</li>
        <li>further balances the roster</li>
        <li>fixes lingering Project M 3.6 bugs</li>
        <li>gives the entire UI a fresh coat of paint</li>
        <li>adjusts movesets to be more fun to play with and against</li>
        <li>introduces new gameplay mechanics to Project M</li>
        <li>includes new features such as those created by the Legacy TE team for Legacy TE 2.5.</li>
      </ul>
    </Content>
  </div>
);