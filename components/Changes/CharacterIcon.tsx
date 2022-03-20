import { iconMap, whitespacesToHyphens } from "../../lib/icon-tools";

export default function CharacterIcon({ name }: { name: string }) {
  // for some ""characters"" like Misc we don't want actual character icons
  const mappedIcon: string|undefined = iconMap[name as keyof typeof iconMap];
  const hyphenizedName = whitespacesToHyphens(name);

  const pathSegment = mappedIcon ? `icons/${mappedIcon}.png` : `characters/${hyphenizedName}.png`;

  return <img src={`/images/${pathSegment}`} style={{ width: 40, height: 40}}/>;
}