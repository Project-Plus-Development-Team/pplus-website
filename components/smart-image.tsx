// Function says: This component displays the generated image variations in a <picture> element so that browsers use whatever they support (looking at you, safari)
// the webp should be a webp version of the image, and the img the non-webp version, both using require() so they use next-optimied-images

// TODO: find out some way to get absolute paths working so that the code using this can be sigificantly compressed

export default function SmartImage({ img, webp, ...rest }) {
  return (
    <picture>
      <source srcSet={webp} type="image/webp"/>
      <source srcSet={img}/>
      <img srcSet={img} {...rest}/>
    </picture>
  );
}