import type { Metadata } from "next";
import { createElement, PropsWithChildren, ReactNode } from "react";
import images from "~image-indexes/features";
import styles from "./Features.module.scss";

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
  "other-explanations": "Other explanations",
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

interface BannerProps {
  tocKey: TOCKey;
  img: keyof typeof images;
}

const Banner = ({ tocKey, img }: BannerProps) => (
  <div
    className={styles.bannerContainer}
    style={{
      backgroundImage: `url(${images[img].src})`,
    }}
  >
    <Headline h={3} tocKey={tocKey} noMargin />
  </div>
);

const BannerRow = (props: BannerProps) => (
  <tr>
    <td colSpan={2} className={styles.bannerCell}>
      <Banner {...props} />
    </td>
  </tr>
);

const NoteRow = ({
  children,
  standalone = false,
}: PropsWithChildren<{ standalone?: boolean }>) => (
  <tr
    className={`${styles.noteRow} ${
      standalone ? styles.standalone : styles.attached
    }`}
  >
    <td colSpan={2}>
      <p>{children}</p>
    </td>
  </tr>
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
            <TOCEntry tocKey="other-explanations" />
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
            <BannerRow tocKey="shortcuts-code-menu" img="code-menu" />
            <tr>
              <td>Open Code menu</td>
              <td>
                <code>L + R + D-Pad Down</code>
              </td>
            </tr>
            <NoteRow>
              This shortcut can be disabled from Code menu itself (
              <i>Code menu Activation</i>). To enable it again, enter the Code
              menu through the menu <i>Versus</i> → <i>Codes</i>.
            </NoteRow>
            <tr>
              <td>Reset Code menu page</td>
              <td>
                <code>Y</code>
              </td>
            </tr>
            <tr>
              <td>Reset single Code menu line</td>
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
            <NoteRow standalone>
              The Code menu has <strong>many</strong> features, like enabling
              the <a href="#shortcuts-debug-mode">Debug mode</a>, displaying
              hitboxes, hitstun, body collision state, ledge grab boxes,
              collision points, locking the camera and so much more! It's
              definitely worth exploring.
            </NoteRow>
            <BannerRow tocKey="shortcuts-debug-mode" img="debug-mode" />
            <tr>
              <td>Enable Debug mode</td>
              <td>
                See <a href="#shortcuts-code-menu">Code menu</a>
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
              <td>Normal pause</td>
              <td>
                <code>X + D-Pad Up</code>
              </td>
            </tr>
            <tr>
              <td>Switch characters - 1x step</td>
              <td>
                <code>B + D-Pad Left</code> / <code>B + D-Pad Right</code>
              </td>
            </tr>
            <tr>
              <td>Switch characters - 10x steps</td>
              <td>
                <code>B + A + D-Pad Left</code> /{" "}
                <code>B + A + D-Pad Right</code>
              </td>
            </tr>
            <NoteRow standalone>
              Looking for Hitbox, Hitstun, Body Collision state, Camera Lock,
              Ledge Grab Box Display, Collision Points (SCD) etc.? Click here:{" "}
              <a href="#shortcuts-code-menu">Code menu</a>
            </NoteRow>
            <BannerRow
              tocKey="shortcuts-css"
              img="character-selection-screen"
            />
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
              <td>Swap a port's color between 12 choices</td>
              <td>
                Press <code>L</code> or <code>R</code> while hovering over a tag
                (e.g. "PLAYER1") or pencil icon
              </td>
            </tr>
            <NoteRow>
              Can also be changed in the{" "}
              <a href="#shortcuts-code-menu">Code menu</a> under{" "}
              <i>HUD Colors</i>.
            </NoteRow>
            <BannerRow tocKey="shortcuts-tag-list" img="tag-list" />
            <tr>
              <td>Open tag list</td>
              <td>
                Press <code>A</code> on the pencil icon near your character
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
            <NoteRow>
              Useful when tag list is full. If the new tag name exists, it will
              switch to the existing tag instead of overwriting because tags
              must be unique.
            </NoteRow>
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
            <BannerRow tocKey="shortcuts-sss" img="stage-selection-screen" />
            <tr>
              <td>Swap stage selection screen layouts / presets</td>
              <td>
                <code>L</code> / <code>R</code> in the random stage selection
                menu
              </td>
            </tr>
            <NoteRow>
              Included presets are as follows: Legal stages (default), PMBR,
              2023 Proposed, 2024 Proposed, Australia, Japan, and All stages
            </NoteRow>
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
            <NoteRow>
              <code>R + Start</code> is exclusively for 1:1 stages while{" "}
              <code>L + Start</code> is for different layouts and for-fun
              stages.
            </NoteRow>
            <tr>
              <td>Enter music selection screen</td>
              <td>
                Press <code>Y</code> while hovering over a stage
              </td>
            </tr>
            <tr>
              <td>Start a stage with a specific music track</td>
              <td>
                Press <code>Start</code> on the music track in the stage's
                tracklist from the music selection screen
              </td>
            </tr>
            <tr>
              <td>Play both on an alt stage and with a specific music track</td>
              <td>
                Hold the button for the desired alt (like <code>L</code>), press{" "}
                <code>Y</code> to open the music selection menu (can release alt
                button) and then pick the desired music track and press{" "}
                <code>Start</code> to start the alt with that music track
              </td>
            </tr>
            <NoteRow>
              The alt button might need to be held for like a second even if the
              music menu is already open, otherwise the game might go to the
              default stage instead of the alt
            </NoteRow>
            <tr>
              <td>Toggle hazards temporarily for selected stage</td>
              <td>
                <code>Z</code> while hovering over a stage
              </td>
            </tr>
            <NoteRow>
              The frame of stage icon indicates the hazard mode.
              <br />
              Orange: Hazards ON, Blue: Hazards OFF.
            </NoteRow>
            <tr>
              <td>Toggle hazards temporarily for all stages</td>
              <td>
                <code>Z</code> while hovering over Random button
              </td>
            </tr>
            <NoteRow>
              The color of the random button and of the stage icon frames get
              updated according to the above mentioned colors for individual
              stages with green (default) meaning hazards according to random
              stage selection menu.
            </NoteRow>
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
            <BannerRow tocKey="shortcuts-replays" img="replays" />
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
            <NoteRow standalone>
              Using Debug mode/frame advance, drawing DI can be enabled, pausing
              on any frame, and checking any possible DI trajectories during
              replay playback (e.g. find the best survival DI for any move)
            </NoteRow>
            <BannerRow tocKey="shortcuts-misc" img="misc" />
            <tr>
              <td>Set a music track in My Music to minimum frequency</td>
              <td>
                <code>L</code>
              </td>
            </tr>
            <tr>
              <td>Set a music track in My Music to maximum frequency</td>
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
              <td>Reroll the playing music track</td>
              <td>
                Hold <code>A</code> and press <code>B</code> when paused
              </td>
            </tr>
            <tr>
              <td>Show currently playing music track</td>
              <td>
                <code>Start</code> (Pause)
              </td>
            </tr>
            <tr>
              <td>Boot to Training mode</td>
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
              <td>Boot to Replay menu</td>
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
        <Banner tocKey="game-modes" img="game-modes" />
        <ul>
          <li>
            New Special Brawl mode: War mode - KO players to steal their stocks!
          </li>
          <li>Big Head and Random Angle modes in Code menu</li>
          <li>
            A new mode has been added to Random Angle in the Code menu: Static
            Random Angle! This will randomize angles for moves, then keep them
            that way for the entire match to allow for strategized setups.
          </li>
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
              <li>Also works in Zero-To-Death mode</li>
              <li>
                Also works in Stamina mode: the players without boss tags will
                have percentage gauges while the Boss tag players will have HP
                and only one stock! Also applies to other settings of the mode
                like blast line wrap-around.
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <Banner
          tocKey="training-practise-controls"
          img="training-practise-controls"
        />
        <ul>
          <li>UCF-style shield dropping</li>
          <li>
            New C-stick control options!
            <ul style={{ marginBottom: "0.5em" }}>
              <li>Tilt C-stick</li>
              <li>
                Charge C-stick - <em>like in other platform fighters</em>
              </li>
              <li>Taunt C-stick</li>
              <li>
                Attack C-stick -{" "}
                <em>
                  not new but changed to support Neutral Air using diagonals
                </em>
              </li>
            </ul>
            <p className={styles.note}>
              These are correctly named in the tag list controls editor, but in
              the Options → Controls menu, they have different names. Tilt:
              "Down Taunt / Footstool", Charge: "Side Taunt / Footstool", Taunt:
              "Up Taunt / Footstool".
            </p>
          </li>
          <li>
            "Shield" option in Training mode no longer gives infinite shield
            (activate in Code menu instead)
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
          <li>
            Solo in Versus mode: When the game settings are changed from
            "stocks" to "time" and the time set to infinite, a match can be
            started without a second player or CPU. This can be useful in
            combination with the Camera Lock feature of the Code menu for e.g.
            movement practise.
          </li>
        </ul>
      </section>
      <section>
        <Banner tocKey="subspace-emissary" img="subspace-emissary" />
        <ul>
          <li>
            Roy, Mewtwo & Knuckles are unlocked post-Tabuu clear
            <p className={styles.note}>
              Does not save on autosave, so unlock message will appear on the
              auto save file upon entering post-Tabuu clear)
            </p>
          </li>
          <li>
            Hold <code>L</code> when selecting a level to override character
            selection and have all characters selectable
          </li>
          <li>
            Hold <code>R</code> during character selection to randomize cursor
          </li>
          <li>
            Hold <code>Y</code> during character selection to be able to select
            the same character twice
          </li>
          <li>
            Hold <code>X</code> while selecting a fully cleared level to start
            Time Attack mode, beat the level as fast as possible while defeating
            enemies to earn the highest score
          </li>
          <li>
            Hold <code>Y</code> while selecting a level to toggle displaying
            timer
          </li>
        </ul>
      </section>
      <section>
        <Banner tocKey="items" img="items" />
        <ul>
          <li>
            Three new item frequency settings have been added to the Item
            Switch: Very High, Intense and Bomb Rain
          </li>
          <li>
            Press <code>Start</code> on Assist Trophies in the item switch menu
            to toggle which Assist Trophies are active in a gameplay session
          </li>
          <li>
            Press <code>Start</code> on Containers in the item switch menu to
            toggle different properties for them, for example explosions!
          </li>
          <li>
            Press <code>Start</code> on Pokémon in the item switch menu to
            toggle the appearances of Pokemon other than Mew, Celebi and Jirachi
            (these Pokemon are excluded as they are tied towards rewards and
            achievements)
          </li>
          <li>
            New item mode: Mayhem! Certain items spontaneously activate for
            maximum chaos!{" "}
            <i>Is enabled like an item in the item switch menu.</i>
          </li>
          <li>
            New item: Flipper! The Flipper from Balloon Fight has returned.
            Toggle on Bumpers to randomly have a chance of a Flipper spawning if
            Ex items are also enabled
          </li>
          <li>
            New item variant: Melee Screw Attack! The Melee version of the Screw
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
        </ul>
      </section>
      <section>
        <Headline h={2} tocKey="more-features" />
        <ul>
          <li>
            Dolphin auto-saves replays from a netplay session. Use the Replay
            Manager executable to manage them.
          </li>
          <li>
            Hazards are now toggle-able for select stages, which will swap
            things such as animations, collisions, and hazards when toggled
            between (Currently supported stages are Smashville, Yoshi’s Island,
            Green Hill Zone, Fountain of Dreams, Dream Land, and Dead Line)
          </li>
        </ul>
      </section>
      <section>
        <Headline h={2} tocKey="other-explanations" />
        <h3 style={{ fontSize: "1em" }}>
          How does the <code>TOGGLE PAGE</code> button in the random stage
          selection menu work?
        </h3>
        <p>
          This button currently works the same as in vanilla Brawl and it's
          appearance can be confusing. The label of the button, e.g.{" "}
          <code>TURN PAGE ON</code> is supposed to be read as an <em>action</em>{" "}
          instead of the current <em>state</em>. Like it's text label, it's
          appearance shows the state that the page will be turned to when
          pressed, not the current state. As soon as all stages on the page are
          set to ON, the action and therefore the text label and appearance of
          the button change to OFF, and vice versa. This is different from a
          "select all" feature tha's common in user interface design.
        </p>
        <p>
          The button doesn't have any effect on the random stage selection other
          than toggling the whole page.
        </p>
        <h3 style={{ fontSize: "1em" }}>
          How does <code>Press DPad to select percent</code> in the Code menu
          work?
        </h3>
        <p>
          Pressing any <code>DPad</code> direction will reset the percent to the
          value of <code>Select percent</code>.
        </p>
      </section>
      <hr />
      <sub>
        <em>
          Thank you to the community members of the P+ Discord server that
          helped with the contents of this page.
        </em>
      </sub>
    </main>
  );
}
