import { NextSeo } from "next-seo";
import { useEffect } from "react";
import { Heading, Columns } from "react-bulma-components";
import { GoodImage } from "shared/components/GoodImage";

import woah from "~generated-images/knuckles-woah.webp";

const waveHref = atob("L3E5Mjgzcnc4ZmcuY3Nz");

const enableWave = () => {
  if (hasWave()) {
    return;
  }

  document.documentElement.setAttribute("style", "animation: flip 1s ease-out");
  
  setTimeout(() => {
    playAudio();
    const wave = document.createElement("link");
    wave.type = "text/css";
    wave.rel = "stylesheet";
    wave.href = waveHref;
    document.head.appendChild(wave);
  }, 500);
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
  }

  stopAudio();
};

const toggleWave = () => {
  if (hasWave()) {
    disableWave();
  } else {
    enableWave();
  }
};

const playAudio = () => {
  const variant = Math.random() > 0.5 ? (
    "L3E5Mjgzcnc4Zmcvc2xhbS1kdW5rLW9zdC1icmFuZC1uZXctZGF5Lm00YQ=="
  ) : (
    "L3E5Mjgzcnc4Zmcvc2FpbnQtcGVwc2ktYXJvdW5kLm9nZw=="
  );
  const audio = new Audio(atob(variant));
  audio.volume = 0.5;
  audio.addEventListener("ended", () => {
    audio.currentTime = 0;
    audio.play();
  });
  audio.play();
  // @ts-ignore
  window[waveHref] = audio;
};

const stopAudio = () => {
  // @ts-ignore
  window[waveHref]?.pause();
};

const FourOhFour = () => {
  useEffect(() => {

    const dropHandler = (event: DragEvent) => {
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
    <>
      <NextSeo title="404 - Page not found"/>
      <Columns className="is-vcentered">
        <Columns.Column className="has-text-centered">
          <Heading>YIKES!</Heading>
          <Heading subtitle>This page could not be found.<br/>Imagine the soothing sound of <a href="https://youtu.be/vv_x6I1l1mM">crashing Project M.</a></Heading>
          <br/>
          <span>
            There&apos;s a high chance this page used to exist, but has moved.<br/>
            A search function to find moved content is in the works, but until then you can<br/>
            <a href="/discord" target="_blank">ask in our Discord server</a> or <a href="https://twitter.com/functiongermany" target="_blank">tweet at me</a>.
          </span>
        </Columns.Column>
        <Columns.Column className="has-text-centered">
          <GoodImage
            img={woah}
            alt="Knuckles with a surprised 'woah!' expression"
            lazy
            onDragStart={e => {
              const ohno = new Audio("/ohno.webm");
              ohno.play();
              e.dataTransfer.setData("text/plain", "knux");
            }}
          />
        </Columns.Column>
      </Columns>
    </>
  );
};

export default FourOhFour;