import { StaticImageData } from "next/image";

type Props = {
  img: StaticImageData
  alt: string
  lazy?: boolean
  width?: number|"initial"
  height?: number|"initial"
} & Exclude<JSX.IntrinsicElements["img"], "src" | "width" | "height" | "alt">

export const GoodImage = ({ img, alt, lazy, width, height, ...rest }: Props) => {
  const widthValue = width === "initial" ? undefined : (width ?? img.width);
  const heightValue = height === "initial" ? undefined : (height ?? img.height);

  return (
    <img
      src={img.src}
      width={widthValue}
      height={heightValue}
      alt={alt}
      loading={lazy ? "lazy" : "eager"}
      {...rest}
    />
  );
};