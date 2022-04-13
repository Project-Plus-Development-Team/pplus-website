import { iconMap, whitespacesToHyphens } from "../icon-tools";
import { GoodImage } from "shared/components/GoodImage";

import characterImages from "~capsules/characters";
import iconImages from "~capsules/icons";
import pplusLogo from "~generated-images/favicon.webp";
import { stringsAreLooselyEquals } from "shared/functions/strings-are-loosely-equals";

const getImgSrc = (name: string) => {
  if (stringsAreLooselyEquals(name, "costumes and content")) {
    return pplusLogo;
  }

  // for some categories like Misc we don't want character icons
  const mappedIcon: string|undefined = iconMap[name as keyof typeof iconMap];
  
  if (mappedIcon) {
    return iconImages[mappedIcon as keyof typeof iconImages];
  }

  const hyphenizedName = whitespacesToHyphens(name);

  return characterImages[hyphenizedName as keyof typeof characterImages];
};

export const CategoryIcon = ({ name }: { name: string }) => {
  const imgsrc = getImgSrc(name);

  return (
    <span data-q="" className="is-flex is-align-items-center">
      <GoodImage
        img={imgsrc}
        alt={`${name} Icon`}
        width={40}
        height="initial"
        lazy
      />
    </span>
  );
};