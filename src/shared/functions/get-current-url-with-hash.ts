export const getCurrentUrlWithHash = (hash: string, encode?: boolean) => {
  if (typeof window === "undefined") {
    return ""; // TODO maybe use some react context magic + getStaticProps to support SSR?
  }

  const url = `${window.location.host}${window.location.pathname}#${hash}`;
  return encode ? encodeURI(url) : url;
};