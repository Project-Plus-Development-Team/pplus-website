import { iconMap, whitespacesToHyphens } from "../icon-tools";

import characterImages from "~capsules/characters";
import iconImages from "~capsules/icons";
import { GoodImage } from "shared/components/GoodImage";

export const CategoryIcon = ({ name }: { name: string }) => {
  // for some categories like Misc we don't want character icons
  const mappedIcon: string|undefined = iconMap[name as keyof typeof iconMap];
  const hyphenizedName = whitespacesToHyphens(name);

  const imgsrc = mappedIcon ? (
    iconImages[mappedIcon as keyof typeof iconImages]
  ) : (
    characterImages[hyphenizedName as keyof typeof characterImages]
  );

  return (
    <GoodImage
      img={imgsrc}
      alt={`${name} Icon`}
      lazy
    />
  );
};