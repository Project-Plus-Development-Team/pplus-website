import { Heading, Modal } from "react-bulma-components";
import useCopyClipboard from "react-use-clipboard";
import { FAButton } from "shared/components/FAButton";
import { PlatformButton } from "shared/components/PlatformButton";
import { Region } from "../map-types";

import styles from "./MapModal.module.scss";

interface Props {
  region: Region | null
  onClose: () => void
}

export const MapModal = ({ region, onClose }: Props) => {
  const url = typeof window === "undefined" ? "" : window.location.href;
  const [hasCopied, setClipboard] = useCopyClipboard(url, {
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
                title={`${region.name} Discord Server`}
                icon="fab fa-discord"
                href={`https://discord.gg/${region.platforms.discordInviteId}`}
              />
            )}
            {region.platforms.facebookGroupId && (
              <PlatformButton
                text="Facebook"
                title={`${region.name} Facebook Group`}
                icon="fab fa-facebook"
                href={`https://facebook.com/groups/${region.platforms.facebookGroupId}`}
              />
            )}
            {region.platforms.twitchName && (
              <PlatformButton
                text="Twitch"
                title={`${region.name} Twitch Channel`}
                icon="fab fa-twitch"
                href={`https://twitch.tv/${region.platforms.twitchName}`}
              />
            )}
            {region.platforms.website && (
              <PlatformButton
                text="Website"
                title={`${region.name} Website`}
                icon="fa-solid fa-globe"
                href={region.platforms.website}
              />
              )}
            {region.platforms.youtubeChannelUrl && (
              <PlatformButton
                text="YouTube"
                title={`${region.name} YouTube Channel`}
                icon="fab fa-youtube"
                href={region.platforms.youtubeChannelUrl}
              />
              )}
            {region.platforms.twitterHandle && (
              <PlatformButton
                text="Twitter"
                title={`${region.name} Twitter`}
                icon="fab fa-twitter"
                href={`https://twitter.com/${region.platforms.twitterHandle}`}
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