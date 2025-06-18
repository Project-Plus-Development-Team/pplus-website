import type { Metadata } from "next";
import styles from "./Features.module.scss";
import { createElement, ReactNode } from "react";
import images from "~image-indexes/features";

export const metadata: Metadata = {
  title: "Features in Project+",
  description: "Features and shortcuts in Project+",
};

/** key is used as id and for <a> and value for displayed text */
const toc = {
  shortcuts: "Button shortcuts",
  "shortcuts-gameplay": "Gameplay",
  "shortcuts-code-menu": "Code menu",
  "shortcuts-debug-mode": "Debug mode",
  "shortcuts-css": "Character selection screen",
  "shortcuts-tag-list": "CSS name entry / tag list",
  "shortcuts-sss": "Stage selection screen",
  "shortcuts-replays": "Replays",
  "shortcuts-misc": "Misc",
  "game-modes": "Game modes",
  "training-practise-controls": "Training, practise and controls",
  "subspace-emissary": "Subspace emissary (campaign)",
  items: "Items",
  "more-features": "More features",
};

type TOCKey = keyof typeof toc;

const TOCEntry = (props: { tocKey: TOCKey; children?: ReactNode }) => (
  <li>
    <a href={"#" + props.tocKey}>{toc[props.tocKey]}</a>
    {props.children && <ol type="A">{props.children}</ol>}
  </li>
);

/** dynamically creates h1, h2 etc based on prop */
const Headline = ({
  tocKey,
  h,
  noMargin = false,
}: {
  tocKey: TOCKey;
  h: number;
  noMargin?: boolean;
}) =>
  createElement(
    "h" + h,
    { id: tocKey, style: { margin: noMargin ? 0 : undefined } },
    toc[tocKey]
  );

export default function Features() {
  return (
    <main
      className="content"
      style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
    >
      <section>
        <h1>Features</h1>
        <nav>
          <ol>
            <TOCEntry tocKey="shortcuts">
              <TOCEntry tocKey="shortcuts-gameplay" />
              <TOCEntry tocKey="shortcuts-code-menu" />
              <TOCEntry tocKey="shortcuts-debug-mode" />
              <TOCEntry tocKey="shortcuts-css" />
              <TOCEntry tocKey="shortcuts-tag-list" />
              <TOCEntry tocKey="shortcuts-sss" />
              <TOCEntry tocKey="shortcuts-replays" />
              <TOCEntry tocKey="shortcuts-misc" />
            </TOCEntry>
            <TOCEntry tocKey="game-modes" />
            <TOCEntry tocKey="training-practise-controls" />
            <TOCEntry tocKey="subspace-emissary" />
            <TOCEntry tocKey="items" />
            <TOCEntry tocKey="more-features" />
          </ol>
        </nav>
      </section>
      <section>
        <Headline h={2} tocKey="shortcuts" />
        <table className={"table " + styles.verticallyCenterCells}>
          <tbody>
            <tr>
              <td colSpan={2}>
                <Headline h={3} tocKey="shortcuts-gameplay" />
              </td>
            </tr>
            <tr>
              <td>Skip results screen or quit endless friendlies</td>
              <td>
                Hold <code>L + R + X</code> when match ends
              </td>
            </tr>
            <tr>
              <td>Salty runback</td>
              <td>
                Hold <code>L + R + Y</code> when match ends
              </td>
            </tr>
            <tr>
              <td>
                Force "continue" on results screen for all players (useful if
                someone's AFK)
              </td>
              <td>
                Hold <code>Start</code> on results screen
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div
                  className={styles.headlineBannerContainer}
                  style={{
                    backgroundImage: `url(${images["code-menu"].src})`,
                  }}
                >
                  <Headline h={3} tocKey="shortcuts-code-menu" noMargin />
                </div>
              </td>
            </tr>
            <tr>
              <td>Open code menu</td>
              <td>
                <code>L + R + D-Pad Down</code>
              </td>
            </tr>
            <tr>
              <td>Reset code menu page</td>
              <td>
                <code>Y</code>
              </td>
            </tr>
            <tr>
              <td>Reset single code menu line</td>
              <td>
                <code>X</code>
              </td>
            </tr>
            <tr>
              <td>Scroll through options faster</td>
              <td>
                Hold <code>Z</code>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div
                  className={styles.headlineBannerContainer}
                  style={{
                    backgroundImage: `url(${images["debug-mode"].src})`,
                  }}
                >
                  <Headline h={3} tocKey="shortcuts-debug-mode" noMargin />
                </div>
              </td>
            </tr>
            <tr>
              <td>Pause</td>
              <td>
                <code>Start</code>
              </td>
            </tr>
            <tr>
              <td>Frame advance</td>
              <td>
                Tap/hold <code>Z</code>
              </td>
            </tr>
            <tr>
              <td>Normal pause </td>
              <td>
                <code>X + D-Pad Up</code>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div
                  className={styles.headlineBannerContainer}
                  style={{
                    backgroundImage: `url(${images["character-selection-screen"].src})`,
                  }}
                >
                  <Headline h={3} tocKey="shortcuts-css" noMargin />
                </div>
              </td>
            </tr>
            <tr>
              <td>Scroll through multiple (3x) costumes at once</td>
              <td>
                Hold <code>L</code> or <code>R</code> while switching costumes
              </td>
            </tr>
            <tr>
              <td>Play a secret character for Bowser, Wario or Ice Climbers</td>
              <td>
                Hold <code>L</code> while going from character screen to stage
                screen
              </td>
            </tr>
            <tr>
              <td>Play a secret costume for any character</td>
              <td>
                Hold <code>R</code> or <code>Z</code> (different secret
                costumes!) while going from character screen to stage screen
                (Nunchuck: <code>C</code> or <code>Z</code>)
              </td>
            </tr>
            <tr>
              <td>Select a random character</td>
              <td>Drop the character token on the side / empty space</td>
            </tr>
            <tr>
              <td>Swap your port's color between 12 choices</td>
              <td>
                Press <code>L</code> or <code>R</code> while hovering over your
                tag (e.g. "PLAYER1") or pencil icon
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div
                  className={styles.headlineBannerContainer}
                  style={{
                    backgroundImage: `url(${images["tag-list"].src})`,
                  }}
                >
                  <Headline h={3} tocKey="shortcuts-tag-list" noMargin />
                </div>
              </td>
            </tr>
            <tr>
              <td>Toggle rumble</td>
              <td>
                <code>X</code>
              </td>
            </tr>
            <tr>
              <td>Modify controls</td>
              <td>
                <code>Y</code>
              </td>
            </tr>
            <tr>
              <td>Overwrite a tag with a new one</td>
              <td>
                Press <code>Z</code> on existing tag
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <em>
                  👆 Notes: Useful when tag list is full. If the new tag name
                  exists, it will switch to the existing tag instead of
                  overwriting because tags must be unique.
                </em>
              </td>
            </tr>
            <tr>
              <td>Move a tag to the top</td>
              <td>
                <code>Start</code>
              </td>
            </tr>
            <tr>
              <td>Scroll 5x faster</td>
              <td>
                Hold <code>L</code> or <code>R</code>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div
                  className={styles.headlineBannerContainer}
                  style={{
                    backgroundImage: `url(${images["stage-selection-screen"].src})`,
                  }}
                >
                  <Headline h={3} tocKey="shortcuts-sss" noMargin />
                </div>
              </td>
            </tr>
            <tr>
              <td>Ban a stage</td>
              <td>
                <code>X</code>
              </td>
            </tr>
            <tr>
              <td>Ban all stages not in random selection</td>
              <td>
                Press <code>X</code> while hovering on the random button
              </td>
            </tr>
            <tr>
              <td>Unban all stages</td>
              <td>
                <code>B</code>
              </td>
            </tr>
            <tr>
              <td>Play an alt stage</td>
              <td>
                Hold <code>L</code>, <code>R</code> or <code>Z</code> when
                selecting a stage (each button loads a different alt)
              </td>
            </tr>
            <tr>
              <td>Open alternate stage selection menu</td>
              <td>
                Hold a <code>L</code> or <code>R</code> and press{" "}
                <code>Start</code> over a stage
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <em>
                  👆 Notes: <code>R + Start</code> is exclusively for 1:1 stages
                  while <code>L + Start</code> is for different layouts and
                  for-fun stages.
                </em>
              </td>
            </tr>
            <tr>
              <td>
                Play secret / easter-egg alt stage versions (e.g. "Survival
                Fever" WarioWare, N64 alts)
              </td>
              <td>
                Hold <code>X</code>, <code>L + R</code> or <code>L + Y</code>{" "}
                while selecting a stage (only available for some stages)
              </td>
            </tr>
            <tr>
              <td>Enter music selection screen</td>
              <td>
                Press <code>Y</code> while hovering over a stage
              </td>
            </tr>
            <tr>
              <td>Start a stage with a specific song</td>
              <td>
                Press <code>Start</code> on the song in the stage's tracklist
                from the music selection screen
              </td>
            </tr>
            <tr>
              <td>Play both on an alt stage and with a specific song</td>
              <td>
                Hold the button for the alt you want (like <code>L</code>),
                press <code>Y</code> to open the music selection menu (can
                release alt button) and then pick your song and press{" "}
                <code>Start</code> to start the alt with that song
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <em>
                  👆 Notes: You might need to hold the alt button for like a
                  second even if the music menu is already open, otherwise the
                  game might go to the default stage instead of the alt
                </em>
              </td>
            </tr>
            <tr>
              <td>Toggle hazards temporarily for selected stage</td>
              <td>
                <code>Z</code> while hovering over a stage
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <em>
                  👆 Notes: The frame of stage icon indicates the hazard mode.
                  <br />
                  Green: Hazards as set via Random stage selection menu. Orange:
                  Hazards ON. Blue: Hazards OFF.
                </em>
              </td>
            </tr>
            <tr>
              <td>Toggle hazards temporarily for all stages</td>
              <td>
                <code>Z</code> while hovering over Random button
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <em>
                  👆 Notes: The color of the random button and of the stage icon
                  frames get updated according to the above mentioned colors for
                  individual stages.
                </em>
              </td>
            </tr>
            <tr>
              <td>
                Loading alts etc. with a Wiimote (might be bugged sometimes)
              </td>
              <td>
                <table className="table is-narrow">
                  <tbody>
                    <tr>
                      <td>
                        <code>B + Left</code>
                      </td>
                      <td>=</td>
                      <td>
                        <code>GC L</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>B + Up</code>
                      </td>
                      <td>=</td>
                      <td>
                        <code>GC R</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>B + Right</code>
                      </td>
                      <td>=</td>
                      <td>
                        <code>GC Z</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>B + Down</code>
                      </td>
                      <td>=</td>
                      <td>
                        <code>GC X</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>A</code>
                      </td>
                      <td>=</td>
                      <td>
                        <code>GC R</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>C</code>
                      </td>
                      <td>=</td>
                      <td>
                        <code>GC X</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>-</code>
                      </td>
                      <td>=</td>
                      <td>
                        <code>GC X</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>- & +</code>
                      </td>
                      <td>=</td>
                      <td>
                        <code>GC Y</code>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>Interrupt stage loading and return to character selection</td>
              <td>
                Hold <code>L + R + A</code> after picking a stge
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                {" "}
                <div
                  className={styles.headlineBannerContainer}
                  style={{
                    backgroundImage: `url(${images["replays"].src})`,
                  }}
                >
                  <Headline h={3} tocKey="shortcuts-replays" noMargin />
                </div>
              </td>
            </tr>
            <tr>
              <td>Speed up playback</td>
              <td>
                Hold <code>A</code>
              </td>
            </tr>
            <tr>
              <td>Slow down playback</td>
              <td>
                Hold <code>B</code>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                Using debug mode/frame advance, you can enable DI draw, pause on
                any frame, and check any possible DI trajectories during replay
                playback (e.g. find the best survival DI for any move)
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div
                  className={styles.headlineBannerContainer}
                  style={{
                    backgroundImage: `url(${images["misc"].src})`,
                  }}
                >
                  <Headline h={3} tocKey="shortcuts-misc" noMargin />
                </div>
              </td>
            </tr>
            <tr>
              <td>Set a song in My Music to minimum frequency</td>
              <td>
                <code>L</code>
              </td>
            </tr>
            <tr>
              <td>Set a song in My Music to maximum frequency</td>
              <td>
                <code>R</code>
              </td>
            </tr>
            <tr>
              <td>
                Select stage alts at the beginning of a Classic/All-star run
              </td>
              <td>
                <code>D-Pad directional inputs</code>
              </td>
            </tr>
            <tr>
              <td>Reset training mode</td>
              <td>
                Hold <code>Z</code> while quitting
              </td>
            </tr>
            <tr>
              <td>Reroll the playing song</td>
              <td>
                Hold <code>A</code> and press <code>B</code> when paused
              </td>
            </tr>
            <tr>
              <td>Boot to Training Mode</td>
              <td>
                Hold <code>L</code> or <code>R</code> (GameCube, Classic
                Controller) or <code>R</code> or <code>B</code> (Wiimote) during
                boot screen
              </td>
            </tr>
            <tr>
              <td>Boot to Title Screen instead of menu</td>
              <td>
                Hold <code>Start</code> (GameCube) or <code>+</code> (Wiimote)
                during boot screen
              </td>
            </tr>
            <tr>
              <td>Boot to Replay Menu</td>
              <td>
                Hold <code>Z</code> (GameCube), <code>ZL</code> or{" "}
                <code>ZR</code> (Classic Controller) or <code>C/-</code>{" "}
                (Wiimote) during boot screen
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <div
          className={styles.headlineBannerContainer}
          style={{
            backgroundImage: `url(${images["game-modes"].src})`,
          }}
        >
          <Headline h={2} tocKey="game-modes" noMargin />
        </div>
        <ul>
          <li>
            New Special Brawl mode: War mode - KO players to steal their stocks!
          </li>
          <li>Big Head and Random Angle modes in Code Menu</li>
          <li>
            New Team Battle option added: Random Teams! New team pairs will be
            shuffled at random after every game
          </li>
          <li>Players on the same team spawn on the same side of the stage</li>
          <li>
            CPUs can now be set to level 0, “Ally”. Having an Ally as a teammate
            will allow players to control their own character and the CPU
            character simultaneously.
          </li>
          <li>
            Special BOSS mode
            <ul>
              <li>
                If someone has a tag containing the word “BOSS”, “boss”, “Boss”,
                or “ボス”, then only players with those tags will experience
                special mode behaviors
              </li>
              <li>
                When used with “CPU Characters Can Use Tags”, assign the tag
                first, then switch the character to be a CPU!
              </li>
              <li>
                <em>
                  [TODO, also add notes on how boss mode affects stamina and
                  zero-to-death modes]
                </em>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <div
          className={styles.headlineBannerContainer}
          style={{
            backgroundImage: `url(${images["training-practise-controls"].src})`,
          }}
        >
          <Headline h={2} tocKey="training-practise-controls" noMargin />
        </div>
        <ul>
          <li>UCF-style shield dropping</li>
          <li>
            New C-stick control options!
            <ul>
              <li>
                Tilt C-stick{" "}
                <em>
                  - In Options {"->"} Controls menu displayed as "Down Taunt /
                  Footstool"
                </em>
              </li>
              <li>
                Charge C-stick{" "}
                <em>
                  - In Options {"->"} Controls menu displayed as "Side Taunt /
                  Footstool"
                </em>
              </li>
              <li>
                Taunt C-stick{" "}
                <em>
                  - In Options {"->"} Controls menu displayed as "Up Taunt /
                  Footstool"
                </em>
              </li>
              <li>
                Attack C-stick{" "}
                <em>
                  - not new but changed to support Neutral Air using diagonals
                </em>
              </li>
            </ul>
          </li>
          <li>
            "Shield" option in Training Mode no longer gives infinite shield
            (activate in Code Menu instead)
          </li>
          <li>
            A new mode has been added to Random Angle in the Code Menu: Static
            Random Angle! This will randomize angles for moves, then keep them
            that way for the entire match to allow for strategized setups.
          </li>
          <li>
            CPUs will now select between one of the 5 options of DI, instead of
            perfectly random DI, to better simulate how it would be with an
            actual opponent
          </li>
          <li>
            Training mode: New Selectable CPU Behaviors: Shield, Crouch, DI in,
            Slight DI In, No DI, Slight DI Out, DI Out, and Slight DI (which
            picks between middle 3 options)
          </li>
        </ul>
      </section>
      <section>
        <div
          className={styles.headlineBannerContainer}
          style={{
            backgroundImage: `url(${images["subspace-emissary"].src})`,
          }}
        >
          <Headline h={2} tocKey="subspace-emissary" noMargin />
        </div>
        <ul>
          <li>
            Roy, Mewtwo & Knuckles are unlocked post-Tabuu clear
            <br />
            <em>
              👆 Note: does not save on autosave, so unlock message will appear
              on the auto save file upon entering post-Tabuu clear)
            </em>
          </li>
          <li>
            Hold L when selecting a level to override character selection and
            have all characters selectable
          </li>
          <li>Hold R during character selection to randomize cursor</li>
          <li>
            Hold Y during character selection to be able to select the same
            character twice
          </li>
          <li>
            Hold X while selecting a fully cleared level to start Time Attack
            mode, beat the level as fast as you can while defeating enemies to
            earn the highest score
          </li>
          <li>Hold Y while selecting a level to toggle displaying timer</li>
        </ul>
      </section>
      <section>
        <div
          className={styles.headlineBannerContainer}
          style={{
            backgroundImage: `url(${images["items"].src})`,
          }}
        >
          <Headline h={2} tocKey="items" noMargin />
        </div>
        <ul>
          <li>
            Three new item frequency settings have been added to the Item
            Switch: Very High, Intense and Bomb Rain
          </li>
          <li>
            Press Start on Assist Trophies to toggle which Assist Trophies are
            active in a gameplay session
          </li>
          <li>
            Press Start on Containers to toggle different properties for them
          </li>
          <li>
            Press Start on Pokémon to toggle the appearances of Pokemon other
            than Mew, Celebi and Jirachi (these Pokemon are excluded as they are
            tied towards rewards and achievements)
          </li>
          <li>
            New Item Mode: Mayhem! Certain items spontaneously activate for
            maximum chaos!
          </li>
          <li>
            New Item: Flipper! The Flipper from Balloon Fight has returned.
            Toggle on Bumpers to randomly have a chance of a Flipper spawning if
            Ex items are also enabled
          </li>
          <li>
            New Item Variant: Melee Screw Attack! The Melee version of the Screw
            Attack has returned, being able to be thrown. Toggle on Screw
            Attacks to randomly have a chance of its Melee variant spawning if
            Ex items are also enabled. Currently it does not send opponents into
            freefall.
          </li>
          <li>
            Zapdos and Articuno have been added, behaving like in Melee. Toggle
            on Moltres if Ex items are also enabled to summon them from a
            Pokéball
          </li>
          <li>
            The Goomba Assist Trophy has been added. Toggle on Hammer Bros.
            while EX items are also enabled to summon them.
          </li>
          <li>
            Crates, Rolling Crates and Barrels can spawn enemies if enabled.
            Currently they can spawn Goombas and Hammer Bros.
          </li>
          <li>
            New EX item: the Double Cherry! Those Ice Climbers won’t be the only
            ones to pair up now. Can be manually turned on or off by pressing
            START on the EX Item choice in Item Switch
          </li>
          <li>
            Containers can randomly explode if enabled in a toggle{" "}
            <em>[TODO: which toggle lol]</em>
          </li>
        </ul>
      </section>
      <section>
        <Headline h={2} tocKey="more-features" />
        <ul>
          <li>
            Dolphin auto-saves replays from a netplay session. Use the Replay
            Manager executable to manage them.
          </li>
          <li>Song titles are displayed when pausing a match</li>
          <li>
            Hazards are now toggle-able for select stages, which will swap
            things such as animations, collisions, and hazards when toggled
            between (Currently supported stages are Smashville, Yoshi’s Island,
            Green Hill Zone, Fountain of Dreams, Dream Land, and Dead Line)
          </li>
          <li>
            Presets can now be swapped between by pressing L or R on the random
            stage selection screen
            <ul>
              <li>
                Included presets are as follows: Legal stages (default), PMBR,
                2023 Proposed, 2024 Proposed, Australia, Japan, and All stages
              </li>
            </ul>
          </li>
        </ul>
        <sub>
          <em>
            Thank you to the community members of the P+ Discord server that
            helped with the contents of this page.
          </em>
        </sub>
      </section>
    </main>
  );
}
