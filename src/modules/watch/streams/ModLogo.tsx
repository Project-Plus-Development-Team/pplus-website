interface Props {
  mod: {
    longName: string
    image: string
  } | null
}

export const ModLogo = ({ mod }: Props) => {
  if (mod === null) {
    return (
      <img
        src="/images/generated/css/question-mark.webp"
        style={{
          transform: "rotateZ(-45deg)",
          verticalAlign: "bottom"
        }}
        alt="Question mark icon"
        title="Unknown mod"
        loading="lazy"
        width={20}
      />
    );
  }

  return (
    <img
      src={mod.image}
      style={{
        verticalAlign: "bottom"
      }}
      alt={`${mod.longName} Logo`}
      title={`${mod.longName} Logo`}
      loading="lazy"
      width={20}
    />
  );
};