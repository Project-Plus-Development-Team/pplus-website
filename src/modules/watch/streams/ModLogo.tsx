import { getModDetails } from "./streams-functions";
import { SupportedMod } from "./supported-mods";

interface Props {
  mod: SupportedMod|null
}

export const ModLogo = ({ mod }: Props) => {
  if (mod === null) {
    return (
      <img
        src="/images/generated/css/question-mark.webp"
        style={{
          transform: "rotateZ(-45deg)"
        }}
        alt="Question mark icon"
        title="Unknown mod"
        loading="lazy"
        width={20}
      />
    );
  }

  const { image, alt } = getModDetails(mod);

  return (
    <img
      src={image}
      alt={`${alt} Logo`}
      title={`${alt} Logo`}
      loading="lazy"
      width={20}
    />
  );
};