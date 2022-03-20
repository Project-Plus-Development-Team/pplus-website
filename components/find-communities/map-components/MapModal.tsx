import { Heading, Modal } from "react-bulma-components";
import useCopyClipboard from "react-use-clipboard";
import { Region } from "../../../types/find-communities-data";
import FAButton from "../../FAButton";
import { PlatformButton } from "../../PlatformButton";

import styles from "./MapModal.module.scss";

interface Props {
  region: Region | null
  onClose: () => void
}

export const MapModal = ({ region, onClose }: Props) => {
  const url = typeof window === "undefined" ? "" : window.location.href;
  const [hasCopied, setClipboard] = useCopyClipboard(encodeURI(url), {
    successDuration: 2000
  });

  return (
    <Modal
      show={region !== null}
      onClose={onClose}
    >
      {region !== null && (
        <Modal.Card>
          <Modal.Card.Header>
            <Modal.Card.Title>{region.name}</Modal.Card.Title>
            <FAButton
              icon={`fa-solid fa-${hasCopied ? "check" : "link"}`}
              color="secondary"
              className="mr-4"
              size="small"
              onClick={setClipboard}
            >
              Copy Link to this
            </FAButton>
          </Modal.Card.Header>
          <Modal.Card.Body className={styles.body}>
            {region.platforms.discordInviteId && (
              <PlatformButton
                text="Discord"
                icon="fab fa-discord"
                href={`https://discord.gg/${region.platforms.discordInviteId}`}
              />
            )}
            {region.platforms.facebookGroupId && (
              <PlatformButton
                text="Facebook"
                icon="fab fa-facebook"
                href={`https://facebook.com/groups/${region.platforms.facebookGroupId}`}
              />
            )}
            {region.platforms.twitchName && (
              <PlatformButton
                text="Twitch"
                icon="fab fa-twitch"
                href={`https://twitch.tv/${region.platforms.twitchName}`}
              />
            )}
            {region.platforms.website && (
              <PlatformButton
                text="Website"
                icon="fa-solid fa-globe"
                href={region.platforms.website}
              />
              )}
            {region.platforms.youtubeChannelUrl && (
              <PlatformButton
                text="YouTube"
                icon="fab fa-youtube"
                href={region.platforms.youtubeChannelUrl}
              />
              )}
            {region.platforms.twitterHandle && (
              <PlatformButton
                text="Twitter"
                icon="fab fa-twitter"
                href={`https://twitter.com/${region.platforms.twitchName}`}
              />
            )}
          </Modal.Card.Body>
          <Modal.Card.Footer className={styles.footer}>
            <Heading subtitle size={6}>
              <i className="fa-solid fa-link-slash"/>
              {" "}
              Something broken or wrong?
              {" "}
              <a href="https://twitter.com/functiongermany" target="_blank">
                Contact me
              </a>
              .
            </Heading>
          </Modal.Card.Footer>
        </Modal.Card>
      )}
    </Modal>
  );
};