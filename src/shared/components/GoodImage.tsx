import { StaticImageData } from "next/image";

type Props = {
  img: StaticImageData
  alt: string
  lazy?: boolean
} & Exclude<JSX.IntrinsicElements["img"], "src" | "width" | "height" | "alt">

export const GoodImage = ({ img, alt, lazy, ...rest }: Props) => (
  <img
    src={img.src}
    width={img.width}
    height={img.height}
    alt={alt}
    loading={lazy ? "lazy" : "eager"}
    {...rest}
  />
);