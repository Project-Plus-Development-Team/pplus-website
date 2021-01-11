import SmartImage from "../smart-image";
import { iconMap, whitespacesToHyphens } from "../../lib/icon-tools";

export default function CharacterIcon({ name }: { name: string }) {
  // for some ""characters"" like Misc we don't want actual character icons
  const mappedIcon: string|undefined = iconMap[name];
  const hyphenizedName = whitespacesToHyphens(name);

  const styling = {
    marginRight: 7,
    height: 40 // we won't need this anymore when responsive-loader resizing is possible
  };

  return mappedIcon ?
    <SmartImage
      img={require(`../../public/images/icons/${mappedIcon}.png`)}
      // TODO we can't resize with 'dynamic' paths for some reason. https://github.com/dazuaz/responsive-loader/issues/135
      webp={require(`../../public/images/icons/${mappedIcon}.png?webp`)}
      style={styling}
    /> :
    <SmartImage
      img={require(`../../public/images/characters/${hyphenizedName}.png`)}
      webp={require(`../../public/images/characters/${hyphenizedName}.png?webp`)}
      style={styling}
    />;
}