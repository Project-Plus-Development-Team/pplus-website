import { DefaultSeo } from "next-seo";

export const DefaultSeoPPlus = () => (
  <DefaultSeo
    defaultTitle="Project+"
    titleTemplate="%s | Project+"
    description="Project+ is a balance patch for Project M, a popular Super Smash Bros. Brawl mod"
    openGraph={{
      type: "website",
      images: [
        {
          url: "/images/generated/favicon.webp",
          alt: "Project+ Logo",
          width: 128,
          height: 128
        }
      ]
    }}
    additionalMetaTags={[
      {
        name: "msapplication-TileColor",
        content: "#34d171"
      },
      {
        name: "theme-color", // theme color for mobile phone tabs
        content: "#34d171"
      },
      {
        name: "author",
        content: "waffeln"
      }
    ]}
    additionalLinkTags={[
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/apple-touch-icon.png?v2=dLXjO2Kp56"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png?v2=dLXjO2Kp56"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png?v2=dLXjO2Kp56"
      },
      {
        rel: "manifest",
        href: "/site.webmanifest?v2=dLXjO2Kp56"
      },
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg?v2=dLXjO2Kp56",
        color: "#34d171"
      },
      {
        rel: "shortcut icon",
        href: "/favicon.ico?v2=dLXjO2Kp56"
      }
    ]}
  />
);