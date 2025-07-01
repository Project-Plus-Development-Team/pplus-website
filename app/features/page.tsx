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
  "shortcuts-code-menu": "Code Menu",
  "shortcuts-debug-mode": "Debug Mode",
  "shortcuts-css": "Character selection screen",
  "shortcuts-tag-list": "CSS name entry / tag list",
  "shortcuts-sss": "Stage selection screen",
  "shortcuts-replays": "Replays",
  "shortcuts-misc": "Misc",
  "game-modes": "Game modes",
  "training-practice-controls": "Training, practice and controls",
  "subspace-emissary": "Subspace emissary (campaign)",
  items: "Items",
  "more-features": "More features",
  "other-explanations": "Other explanations",
  comparisons: "Comparisons with Melee and Brawl",
  "other-resources": "Other resources",
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
            <TOCEntry tocKey="training-practice-controls" />
            <TOCEntry tocKey="subspace-emissary" />
            <TOCEntry tocKey="items" />
            <TOCEntry tocKey="more-features" />
            <TOCEntry tocKey="other-explanations" />
            <TOCEntry tocKey="comparisons" />
            <TOCEntry tocKey="other-resources" />
          </ol>
        </nav>
      </section>
      <hr />
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
              <td>Reset GameCube controller</td>
              <td>
                <code>X</code> + <code>Y</code> + <code>Start</code>
              </td>
            </tr>
            <NoteRow>
              Only useful on console. Generally not needed on Dolphin.
            </NoteRow>
            <BannerRow tocKey="shortcuts-code-menu" img="code-menu" />
            <tr>
              <td>Open Code Menu</td>
              <td>
                <code>L + R + D-Pad Down</code>
              </td>
            </tr>
            <NoteRow>
              This shortcut can be disabled from Code Menu itself (
              <i>Code Menu Activation</i>). To enable it again, enter the Code
              Menu through the menu <i>Versus</i> → <i>Codes</i>.
            </NoteRow>
            <tr>
              <td>Reset Code Menu page</td>
              <td>
                <code>Y</code>
              </td>
            </tr>
            <tr>
              <td>Reset single Code Menu line</td>
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
              The Code Menu has <strong>many</strong> features, like enabling
              the <a href="#shortcuts-debug-mode">Debug Mode</a>, displaying
              hitboxes, hitstun, body collision state, ledge grab boxes,
              collision points, locking the camera and so much more! It's
              definitely worth exploring.
            </NoteRow>
            <BannerRow tocKey="shortcuts-debug-mode" img="debug-mode" />
            <tr>
              <td>Enable Debug Mode</td>
              <td>
                See <a href="#shortcuts-code-menu">Code Menu</a>
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
              <td>Switch characters — 1x step</td>
              <td>
                <code>B + D-Pad Left</code> / <code>B + D-Pad Right</code>
              </td>
            </tr>
            <tr>
              <td>Switch characters — 10x steps</td>
              <td>
                <code>B + A + D-Pad Left</code> /{" "}
                <code>B + A + D-Pad Right</code>
              </td>
            </tr>
            <NoteRow standalone>
              Looking for Hitbox, Hitstun, Body Collision state, Camera Lock,
              Ledge Grab Box Display, Collision Points (SCD) etc.? Click here:{" "}
              <a href="#shortcuts-code-menu">Code Menu</a>
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
              <a href="#shortcuts-code-menu">Code Menu</a> under{" "}
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
            <NoteRow>
              Works in any scrollable list on the CSS, like the tag list,
              controls list when pressing <code>Y</code> in the tag list, or HP
              list in stamina mode.
            </NoteRow>
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
              The alt button might need to be held for about a second even if
              the music menu is already open, otherwise the game might go to the
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
              Using Debug Mode/frame advance, drawing DI can be enabled, pausing
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
              <td>Boot to training mode</td>
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
      <hr />
      <section>
        <Banner tocKey="game-modes" img="game-modes" />
        <ul>
          <li>
            New Special Brawl mode: War mode — KO players to steal their stocks!
          </li>
          <li>Big Head and Random Angle modes in Code Menu</li>
          <li>
            A new mode has been added to Random Angle in the Code Menu: Static
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
      <hr />
      <section>
        <Banner
          tocKey="training-practice-controls"
          img="training-practice-controls"
        />
        <ul>
          <li>UCF-style shield dropping</li>
          <li>
            New C-stick control options!
            <ul style={{ marginBottom: "0.5em" }}>
              <li>Tilt C-stick</li>
              <li>
                Charge C-stick — <em>like in other platform fighters</em>
              </li>
              <li>Taunt C-stick</li>
              <li>
                Attack C-stick —{" "}
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
            (activate in Code Menu instead)
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
            combination with the Camera Lock feature of the Code Menu for e.g.
            movement practice.
          </li>
        </ul>
      </section>
      <hr />
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
      <hr />
      <section>
        <Banner tocKey="items" img="items" />
        <ul>
          <li>
            Three new item frequency settings have been added to the Item
            Switch: Very High, Intense and Bomb Rain
          </li>
          <li>
            Press <code>Start</code> on Assist Trophies in the Item Switch menu
            to toggle which Assist Trophies are active in a gameplay session
          </li>
          <li>
            Press <code>Start</code> on Containers in the Item Switch menu to
            toggle different properties for them, for example explosions!
          </li>
          <li>
            Press <code>Start</code> on Pokémon in the Item Switch menu to
            toggle the appearances of Pokemon other than Mew, Celebi and Jirachi
            (these Pokemon are excluded as they are tied towards rewards and
            achievements)
          </li>
          <li>
            New item mode: Mayhem! Certain items spontaneously activate for
            maximum chaos!{" "}
            <i>Is enabled like an item in the Item Switch menu.</i>
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
      <hr />
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
            <p className={styles.note}>
              TODO this info alone doesn't explain how it's used - that
              explanation is e.g. in the SSS section. maybe move this there? but
              then what about the hazard toggles in the random stage selection
              menu?
            </p>
          </li>
        </ul>
      </section>
      <hr />
      <section>
        <Headline h={2} tocKey="other-explanations" />
        <h3 style={{ fontSize: "1em" }}>
          How does the <code>TOGGLE PAGE</code> button in the random stage
          selection menu work?
        </h3>
        <p>
          This button currently works the same as in vanilla Brawl and its
          appearance can be confusing. The label of the button, e.g.{" "}
          <code>TURN PAGE ON</code> is supposed to be read as an <em>action</em>{" "}
          instead of the current <em>state</em>. Like its text label, its
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
          How does <code>Press DPad to select percent</code> in the Code Menu
          work?
        </h3>
        <p>
          Pressing any <code>DPad</code> direction will reset the percent to the
          value of <code>Select percent</code>.
        </p>
      </section>
      <hr />
      <section>
        <Headline h={2} tocKey="comparisons" />
        <table
          className={`table ${styles.verticallyCenterCells} ${styles.alternativeLinks}`}
        >
          <tbody>
            <tr>
              <td colSpan={2}>
                <h4>Properties from Melee</h4>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/Wavedash">Wavedashing</a>
              </td>
              <td>✅</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/L-canceling">L-canceling</a>
              </td>
              <td>✅</td>
            </tr>
            <NoteRow>
              Automatic L-canceling can be enabled in the versus settings but is
              not allowed in most tournaments.
            </NoteRow>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/Crouch_cancel">
                  Crouch canceling
                </a>
              </td>
              <td>✅</td>
            </tr>
            <NoteRow>TODO add details</NoteRow>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/Shield">Light shield</a>
              </td>
              <td>❌</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/L-canceling">L-cancel</a>{" "}
                without tech
              </td>
              <td>
                ✅ — Light press <code>L</code> / <code>R</code> like in Melee
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/Jump-canceled_grab">
                  Jump-canceled grab
                </a>{" "}
                (JC Grab)
              </td>
              <td>✅</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/Boost_grab">Boost grab</a>
              </td>
              <td>✅</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/Shield_drop">
                  Shield dropping
                </a>
              </td>
              <td>✅</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/Short_hop_fast_fall_L-cancel">
                  Short hop fast fall L-cancel
                </a>{" "}
                (SHFFL)
              </td>
              <td>✅</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/Moonwalk">Moonwalk</a>
              </td>
              <td>✅</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/Dashdance">Dash dancing</a>
              </td>
              <td>✅ — instant</td>
            </tr>
            <tr>
              <td>
                Ice Climbers:{" "}
                <a href="https://www.ssbwiki.com/Wobbling">Wobbling</a>
              </td>
              <td>❌</td>
            </tr>
            <tr>
              <td>
                Spacies:{" "}
                <a href="https://www.ssbwiki.com/Waveshine">Waveshining</a>
              </td>
              <td>✅ — also available to Wolf</td>
            </tr>
            <tr>
              <td>
                Peach: <a href="https://www.ssbwiki.com/Vegetable">Vegetable</a>{" "}
                (Down Special)
              </td>
              <td>Can't pull Bob-ombs or Swords</td>
            </tr>
            <tr>
              <td>
                Samus:{" "}
                <a href="https://www.ssbwiki.com/Super_wavedash">
                  Super wavedash
                </a>
              </td>
              <td>✅ — 2 frame window instead of 1 frame</td>
            </tr>
            <tr>
              <td>
                Luigi:{" "}
                <a href="https://www.ssbwiki.com/Green_Missile">Misfire</a>
              </td>
              <td>✅</td>
            </tr>
            <NoteRow>
              TODO: add details on how storing misfire works in PM/P+
            </NoteRow>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/Double_jump_cancel">
                  Double jump cancel
                </a>
              </td>
              <td>✅</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/V-cancelling">V-canceling</a>
              </td>
              <td>❌</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <h4>Properties from Brawl</h4>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/Tripping">Tripping</a>
              </td>
              <td>❌</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/Reverse_aerial_rush">
                  Reverse aerial rush
                </a>
              </td>
              <td>✅</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/B-reversing">B-reversing</a>
              </td>
              <td>✅</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/B-reversing#Wavebounce">
                  Wavebounce
                </a>
              </td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Reverse ledge grab</td>
              <td>❌ — only at apex of Up-B, like Melee</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/Pivot_grab">Pivot grab</a>
              </td>
              <td>✅</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/Autolanding">Autolanding</a>
              </td>
              <td>❌</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/DACUS">
                  Dash attack canceled up smash
                </a>{" "}
                (DACUS)
              </td>
              <td>✅</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/Hitstun_canceling">
                  Hitstun canceling
                </a>
              </td>
              <td>❌</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/Momentum_canceling">
                  Momentum canceling
                </a>
              </td>
              <td>❌</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/Buffer">Buffering</a>
              </td>
              <td>❌ — like Melee</td>
            </tr>
            <NoteRow>
              A 3-frame buffer can be enabled in the versus settings (like
              Brawl) but is not allowed in most tournaments.
            </NoteRow>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/Footstool_Jump">
                  Footstool Jump
                </a>
              </td>
              <td>✅</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/Dash_pivot_cancel">
                  Dash pivot cancel
                </a>
              </td>
              <td>❌</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ssbwiki.com/Platform_cancel">
                  Platform cancel
                </a>
              </td>
              <td>❌</td>
            </tr>
            <NoteRow standalone>
              TODO more to check:
              <br />
              <a href="https://www.ssbwiki.com/Hilldash">Hilldash</a>
            </NoteRow>
          </tbody>
        </table>
      </section>
      <hr />
      <section>
        <Headline h={2} tocKey="other-resources" />
        <p>
          Melee & P+ gameplay differences —{" "}
          <a href="https://docs.google.com/document/d/1iOZ19U4mSRbspd4fx2HmMWAfax5C2Do6Z1M8KrjJz3E">
            Google Docs
          </a>
        </p>
        <p>
          Attributes (Frame data, weights, knockback values, ranges etc.) —{" "}
          <a href="https://docs.google.com/spreadsheets/d/1cp8_dGoGHP5SqbFjqqdygDX2QMW8lNNDeYRbSiLG4xE">
            Google Docs
          </a>
        </p>
        <p>
          Stage stats —{" "}
          <a href="https://docs.google.com/spreadsheets/d/1XVq9SqC3Qv20h4zdbcaSTlC5CBX0cGNDDQCOPQ9CRYA">
            Google Docs
          </a>
        </p>
        <p>
          All Stages —{" "}
          <a href="https://docs.google.com/document/d/1dIFPIiFPBFrXXMoOgX12CSo6qXPTfjX9KTuTEpx8Qeg">
            Google Docs
          </a>
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
