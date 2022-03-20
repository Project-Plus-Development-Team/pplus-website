import { iconMap, whitespacesToHyphens } from "../../lib/icon-tools";
import Image from "next/image";

export default function CharacterIcon({ name }: { name: string }) {
  // for some ""characters"" like Misc we don't want actual character icons
  const mappedIcon: string|undefined = iconMap[name];
  const hyphenizedName = whitespacesToHyphens(name);

  const pathSegment = mappedIcon ? `icons/${mappedIcon}.png` : `characters/${hyphenizedName}.png`;

  return <Image src={`/images/${pathSegment}`} width={40} height={40}/>;
}