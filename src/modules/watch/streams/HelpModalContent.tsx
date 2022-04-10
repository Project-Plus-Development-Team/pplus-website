import { useEffect, useState } from "react";
import { Form, Modal } from "react-bulma-components";
import { useMod } from "./hooks/use-mod";
import { supportedModsArray } from "./mod-data";
import { ModLogo } from "./ModLogo";

const getRandomExampleTitle = () => {
  const seed = Math.random();

  if (seed > 0.95) {
    return atob("RG9uJ3QgZ28gZGlnZ2luZyB3aGVyZSBub3RoaW5nIHdhcyBmb3VuZA==");
  }

  if (seed > 0.8) {
    return "Watch me miss my techs in Project+";
  }

  if (seed > 0.6) {
    return "Playing PM with the HOMIES";
  }

  if (seed > 0.4) {
    return "T+ | end my suffering 😂";
  }

  if (seed > 0.2) {
    return "I can't believe they added Goku in P+";
  }

  return "[Project M] Charizard court case livestream";
};

export const HelpModalContent = () => {
  const [title, setTitle] = useState("");
  const mod = useMod(title);

  useEffect(() => {
    setTitle(getRandomExampleTitle());
  }, []);

  return (
    <Modal.Card>
      <Modal.Card.Header>
        <Modal.Card.Title>
          How to get your stream on this page
        </Modal.Card.Title>
      </Modal.Card.Header>
      <Modal.Card.Body className="content">
        <ul>
          <li>Stream on Twitch.tv</li>
          <li>Use the Super Smash Bros. Brawl category</li>
          <li>
            Add one of the supported tags to your stream title (case insensitive):
            <p className="is-flex gap is-flex-wrap-wrap">
              {supportedModsArray.map(mod => (
                <code key={mod} className="has-background-dark">{mod}</code>
              ))}
            </p>
          </li>
          <li>Before and after the tag must be one of: title start, title end, whitespace, or any type of bracket</li>
        </ul>
        <p>Try out the stream title matching here:</p>
        <p>
          <Form.Input
            value={title}
            onChange={e => setTitle(e.target.value)}
            style={{ width: "100%"}}
          />
        </p>
        <p>
          Detected: {mod?.longName ?? "Unknown mod"}
          <ModLogo mod={mod}/>
        </p>
      </Modal.Card.Body>
    </Modal.Card>
  );
};