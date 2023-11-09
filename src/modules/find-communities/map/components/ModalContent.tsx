import {
  faDiscord,
  faFacebook,
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCheck, faGlobe, faLink } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { Button, Heading, Modal } from "react-bulma-components";
import { PlatformButton } from "shared/components/PlatformButton";
import { FAButton } from "shared/components/FAButton";
import { Region } from "../map-types";
import { useClipboard } from "shared/hooks/use-clipboard";

import styles from "./MapModal.module.scss";

interface Props {
  region: Region;
  onClose: () => void;
}

export const ModalContent = ({ region, onClose }: Props) => {
  const url = typeof window === "undefined" ? "" : window.location.href;
  const [hasCopied, setClipboard] = useClipboard(url);

  useEffect(() => {
    // TODO couldn't make this work with react's autoFocus polyfill, so this has to do for now.
    const cardBody = document.querySelector(".modal-card-body");

    if (cardBody) {
      const link = cardBody.querySelector("a");
      link?.focus();
    }
  }, []);

  return (
    <Modal.Card>
      <Modal.Card.Header
        className="is-justify-content-space-between"
        showClose={false}
      >
        <div className="is-flex-grow-1 is-flex is-flex-wrap-wrap is-justify-content-space-between gap">
          <Modal.Card.Title
            id="modal-title"
            style={{ maxWidth: "100%", overflowWrap: "anywhere" }}
          >
            Communities in {region.name}
          </Modal.Card.Title>
          <FAButton
            icon={hasCopied ? faCheck : faLink}
            color="secondary"
            className="mr-4"
            size="small"
            onClick={setClipboard}
          >
            Copy Link to this
          </FAButton>
          <Button remove onClick={onClose} aria-label="Close this modal" />{" "}
          {/* [upstream] https://github.com/couds/react-bulma-components/pull/386 */}
        </div>
      </Modal.Card.Header>
      <Modal.Card.Body className={styles.body} aria-labelledby="modal-title">
        {region.platforms.discordInviteId && (
          <PlatformButton
            text="Discord"
            title={`${region.name} Discord Server`}
            icon={faDiscord}
            href={`https://discord.com/invite/${region.platforms.discordInviteId}`}
          />
        )}
        {region.platforms.facebookGroupId && (
          <PlatformButton
            text="Facebook"
            title={`${region.name} Facebook Group`}
            icon={faFacebook}
            href={`https://facebook.com/groups/${region.platforms.facebookGroupId}`}
          />
        )}
        {region.platforms.twitchName && (
          <PlatformButton
            text="Twitch"
            title={`${region.name} Twitch Channel`}
            icon={faTwitch}
            href={`https://twitch.tv/${region.platforms.twitchName}`}
          />
        )}
        {region.platforms.website && (
          <PlatformButton
            text="Website"
            title={`${region.name} Website`}
            icon={faGlobe}
            href={region.platforms.website}
          />
        )}
        {region.platforms.youtubeChannelUrl && (
          <PlatformButton
            text="YouTube"
            title={`${region.name} YouTube Channel`}
            icon={faYoutube}
            href={region.platforms.youtubeChannelUrl}
          />
        )}
        {region.platforms.twitterHandle && (
          <PlatformButton
            text="Twitter"
            title={`${region.name} Twitter`}
            icon={faTwitter}
            href={`https://twitter.com/${region.platforms.twitterHandle}`}
          />
        )}
      </Modal.Card.Body>
      <Modal.Card.Footer className={styles.footer}>
        <Heading subtitle size={3} style={{ textAlign: "center"}}>
          <i className="fa-solid fa-link-slash" />
          <span>Something broken or wrong?</span>
          <br />
          <a href="https://projectplusgame.com/discord">
            Join our Discord server
          </a>
            {" and use the #website channel."}
          <br />
          <span>
            {" or send me an e-mail at "}
            <a href="mailto:waffeln@mailbox.org">
               waffeln@mailbox.org
            </a>
          </span>
        </Heading>
      </Modal.Card.Footer>
    </Modal.Card>
  );
};
