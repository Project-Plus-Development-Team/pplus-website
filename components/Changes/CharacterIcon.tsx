import { iconMap, whitespacesToHyphens } from "../../lib/icon-tools";

import characterImages from "~capsules/characters";
import iconImages from "~capsules/icons";

export default function CharacterIcon({ name }: { name: string }) {
  // for some ""characters"" like Misc we don't want actual character icons
  const mappedIcon: string|undefined = iconMap[name as keyof typeof iconMap];
  const hyphenizedName = whitespacesToHyphens(name);

  const imgsrc = mappedIcon ? iconImages[mappedIcon] : characterImages[hyphenizedName];

  return <img src={imgsrc.src}/>;
}