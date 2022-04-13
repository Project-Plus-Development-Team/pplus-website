import { NextSeo } from "next-seo";
import { useEffect } from "react";
import { Heading } from "react-bulma-components";
import { GoodImage } from "shared/components/GoodImage";

import woah from "~generated-images/knuckles-woah.webp";

const waveHref = atob("L3E5Mjgzcnc4ZmcuY3Nz");

const enableWave = () => {
  console.log("enablewave");

  if (hasWave()) {
    return;
  }

  const wave = document.createElement("link");
  wave.type = "text/css";
  wave.rel = "stylesheet";
  wave.href = waveHref;
  document.head.appendChild(wave);
  const playAudio = loadAudio();

  let maybePlayVideo: Function|null = null;

  if (Math.random() > 0.5) {
    maybePlayVideo = loadVideo();
  }

  wave.addEventListener("load", () => {
    console.log("load");

    document.documentElement.setAttribute("style", "animation: flip 1s ease-out");
    playAudio();
    maybePlayVideo?.();

    setTimeout(() => {
      console.log("enablecss");
      document.documentElement.classList.add("q9283rw8fg");
      document.body.setAttribute(
        "style",
        maybePlayVideo ? (
          "background: transparent !important"
        ) : (
          "background-image: url(/images/generated/q9283rw8fg/vaporwave-wallpaper.webp)"
        )
      );
    }, 500);
  });
};

const hasWave = () => {
  const wave = document.head.querySelector(`link[href='${waveHref}'`);
  return wave !== null;
};

const disableWave = () => {
  const wave = document.head.querySelector(`link[href='${waveHref}'`);

  if (wave === null) {
    enableWave();
  } else {
    wave.remove();
    document.documentElement.setAttribute("style", "");
    document.documentElement.classList.remove("q9283rw8fg");
  }

  music?.pause();
  music = null;

  video?.remove();
  document.body.setAttribute("style", "");
};

const toggleWave = () => {
  if (hasWave()) {
    disableWave();
  } else {
    enableWave();
  }
};

let music: HTMLAudioElement|null = null;

const loadAudio = () => {
  const variant = Math.random() > 0.5 ? (
    "L3E5Mjgzcnc4Zmcvc2xhbS1kdW5rLW9zdC1icmFuZC1uZXctZGF5Lm9nZw=="
  ) : (
    "L3E5Mjgzcnc4Zmcvc2FpbnQtcGVwc2ktYXJvdW5kLm9nZw=="
  );
  const audio = new Audio(atob(variant));
  audio.volume = 0.5;
  music = audio;
  return () => audio.play();
};

const style = (
  "position: fixed;"
  + "min-height: 100vh;"
  + "top: 0;"
  + "left: 0;"
  + "min-width: 100vw;"
  + "object-fit: cover;"
  + "z-index: -100;"
);

let video: HTMLVideoElement|null;

const loadVideo = () => {
  video = document.createElement("video");
  video.playsInline = true;
  video.autoplay = true;
  video.loop = true;
  video.setAttribute("style", style + "display: none");
  video.src = "/q9283rw8fg/bgloop.webm";

  document.body.appendChild(video);
  return () => video?.setAttribute("style", style + "display: initial");
};

const FourOhFour = () => {
  useEffect(() => {
    const dropHandler = (event: DragEvent) => {
      event.preventDefault();
      const doTheThing = event.dataTransfer?.getData("text/plain") === "knux";
      
      if (!doTheThing) {
        return;
      }

      const confirmed = window.confirm(atob("VG9nZ2xlIFByb2plY3QgV2F2ZT8="));

      if (confirmed) {
        toggleWave();
      }
    };

    const dragOverHandler = (event: DragEvent) => {
      event.preventDefault(); // prevents not allowing drag & drop
    };

    const logo = document.querySelector<HTMLImageElement>(".navbar-item img");

    if (logo === null) {
      throw new Error(":(");
    }

    logo.addEventListener("drop", dropHandler);
    document.addEventListener("dragover", dragOverHandler);
    
    return () => {
      logo.removeEventListener("drop", dropHandler);
      document.removeEventListener("dragover", dragOverHandler);
    };
  }, []);

  return (
    <main style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexWrap: "wrap"
    }}>
      <NextSeo title="404 - Page not found"/>
      <div style={{ maxWidth: 600 }}>
        <Heading>YIKES!</Heading>
        <Heading subtitle>This page could not be found.<br/>Imagine the soothing sound of <a href="https://www.youtube.com/watch?v=vv_x6I1l1mM">crashing Project M.</a></Heading>
        <br/>
        <span>
          There&apos;s a high chance this page used to exist, but has moved.<br/>
          A search function to find moved content is in the works, but until then you can<br/>
          <a href="/discord">ask in our Discord server</a> or <a href="https://twitter.com/functiongermany">tweet at me</a>. {/* [a11y] */}
        </span>
      </div>
      <GoodImage
        img={woah}
        alt="Knuckles with a surprised 'woah!' expression"
        data-q="woah"
        lazy
        onDragStart={e => {
          const ohno = new Audio("/ohno.ogg");
          ohno.play();
          e.dataTransfer.setData("text/plain", "knux");
        }}
      />
    </main>
  );
};

export default FourOhFour;