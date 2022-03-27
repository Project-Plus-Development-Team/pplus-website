import { useState } from "react";

export const useEgg = () => {
  const [eggCounter, setEggCounter] = useState(1);
  const [spin, setSpin] = useState(false);
  const [useAltSpin, setUseAltSpin] = useState(false);

  const [spin1Audio, setSpin1Audio] = useState<HTMLAudioElement|null>(null);
  const [spin2Audio, setSpin2Audio] = useState<HTMLAudioElement|null>(null);

  const egg = () => {
    if (eggCounter >= 5) { // if approaching easter egg
      if (!useAltSpin && !spin1Audio) { // and we want spin 1 and it's not set
        setSpin1Audio(new Audio("/spin1.mp3")); // these start loading the audio so it's ready
      }

      if (useAltSpin && !spin2Audio) { // or we want spin 2 and it's not set
        setSpin2Audio(new Audio("/spin2.mp3"));
      }
    }

    if (eggCounter >= 15) {
      setEggCounter(0);

      const spinAudio = useAltSpin ? spin2Audio : spin1Audio;

      if (spinAudio === null) {
        return;
      }

      spinAudio.volume = 0.3;
      spinAudio.play().then(() => {
        setSpin(true);

        setTimeout(() => {
          setSpin(false);
          setUseAltSpin(!useAltSpin);
        }, 3000);
      });

      return;
    }

    setEggCounter(eggCounter + 1);
  };

  return {
    egg, spin, useAltSpin
  };
};