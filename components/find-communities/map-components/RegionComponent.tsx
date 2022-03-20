import { Marker } from "react-simple-maps";
import { textToNumber } from "../../../lib/text-to-number";
import { Region } from "../../../types/find-communities-data";

interface Props {
  region: Region
  onClick: () => void
  dynamicScalingFactor: number
  zoom: number
  isDesktop: boolean
}

export const RegionComponent = ({
  region, onClick, zoom, dynamicScalingFactor, isDesktop
}: Props) => {
  const { name, coordinates, showThreshold} = region;
  const fontFactor = (16 / zoom) + (!isDesktop ? 0.5 : 0);

  const hue = textToNumber(name) % 100 + 120;
  const brightness = (textToNumber(name) % 5) * 5 + 60;

  return (
    <Marker key={name} coordinates={[coordinates!.longitude, coordinates!.latitude]}>
      <a
        onClick={onClick}
        style={{
          filter: "drop-shadow(0 .5px .2px black)"
        }}
      >
        <circle
          r={3 * dynamicScalingFactor}
          fill={`hsl(${hue}, 100%, ${brightness}%)`}
        />
        <text
          textAnchor="middle"
          y={0.8 * fontFactor + 5 * dynamicScalingFactor}
          fontSize={fontFactor}
          style={{
            fill: `hsl(${hue}, 100%, 90%)`,
            display: zoom > showThreshold ? "inherit" : "none"
          }}
        >{name}</text>
      </a>
    </Marker>
  );
};