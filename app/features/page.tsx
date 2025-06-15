import type { Metadata } from "next";
import styles from "./Features.module.scss";

export const metadata: Metadata = {
  title: "Features in Project+",
  description: "Features and shortcuts in Project+",
};

export default function Features() {
  return (
    <main>
      <section>
        <h2 className="title is-2">Button shortcuts</h2>
        <table className={styles.table}>
          <tbody></tbody>
        </table>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td colSpan={2}>
                <h3 className="title is-3">Gameplay</h3>
              </td>
            </tr>
            <tr>
              <td>Skip results screen or quit endless friendlies</td>
              <td>
                Hold <code>L + R + X</code> at results screen
              </td>
            </tr>
            <tr>
              <td>Salty runback</td>
              <td>
                Hold <code>L + R + Y</code> at results screen
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <h3 className="title is-3">Code menu</h3>
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
                <h3 className="title is-3">Debug mode</h3>
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
                <h3 className="title is-3">Character selection screen</h3>
              </td>
            </tr>
            <tr>
              <td>Scroll through multiple costumes at once</td>
              <td>
                Hold <code>L</code> or <code>R</code>
              </td>
            </tr>
            <tr>
              <td>
                Play a secret character for Browser, Wario or Ice Climbers
              </td>
              <td>
                Hold <code>L</code> while going from character screen to stage
                screen
              </td>
            </tr>
            <tr>
              <td>Play a secret costume for any character</td>
              <td>
                Hold <code>R</code> or <code>Z</code> while going from character
                screen to stage screen (Nunchuck: <code>C</code> or{" "}
                <code>Z</code>)
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
                port
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <h3 className="title is-3">CSS name entry / tag list</h3>
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
              <td>
                [TODO: i don't understand this one yet, this is a guess on how
                it works] Search for a tag (creates new one if missing)
              </td>
              <td>
                Press <code>Z</code> on an existing tag
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
                <h3 className="title is-3">Stage selection screen</h3>
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
                <code>Z</code>
              </td>
            </tr>
            <tr>
              <td>Ban non-legal stages</td>
              <td>
                <code>Y</code>
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
              <td>Enter music selection</td>
              <td>Y</td>
            </tr>
            <tr>
              <td>
                Toggle hazards temporarily for selected stage (this can also be
                done while hovered over the random button to only random to
                hazard on/off variants of stages
              </td>
              <td>
                <code>Z</code> while hovering over a stage
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <em>
                  Notes: Pressing only Start on a stage will once again select
                  the default stage. R+Start is exclusively used for 1:1 stages,
                  while L+Start’s menu contains different layouts and for-fun
                  stages. Only Temple of Time (L), Castle Siege (Both), and
                  Training Room (R) currently have stages in place
                </em>
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
                  Hold B on a Wiimote with a direction to get the GameCube
                  equivalent of an option:
                  <code>B+Left = GC L</code>
                  <code>B+Up = GC R</code>
                  <code>B+Right = GC Z</code>
                  <code>B+Down = GC X</code>
                  <code>A = GC R</code>
                  <code>C = GC X</code>
                  <code>- = GC X</code>
                  <code>-&+ together = GC Y</code>
                </em>
              </td>
            </tr>
            <tr>
              <td>
                Play secret / easter-egg alt stage versions (e.g. concert
                Smashville, Brawl stages, "Survival Fever" WarioWare, N64 alts)
              </td>
              <td>
                Hold <code>X</code>, <code>Y</code>, <code>L + R</code> or{" "}
                <code>L + Y</code> while selecting a stage (only available for
                some stages)
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
                <h3 className="title is-3">Replays</h3>
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
                <h3 className="title is-3">Misc</h3>
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
              <td>[TODO: test out] Start a stage with a specific song</td>
              <td>
                Press <code>Start</code> on the song in the stage's tracklist
                from the stage selection screen (works with alt stages too)
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
        <sub>
          <em>
            Credit to mawwwk for collecting the shortcuts on which this shortcut
            list is largely based on
          </em>
        </sub>
        <h2 className="title is-2">More features</h2>
        <p>
          "Shield" option in Training Mode no longer gives infinite shield
          (activate in Code Menu instead)
        </p>
        <p>
          Dolphin auto-saves replays from a netplay session. Use the Replay
          Manager executable to manage them.
        </p>
        <p>
          Three new item frequency settings have been added to the Item Switch:
          Very High, Intense and Bomb Rain
        </p>
        <p>Song titles are displayed when pausing a match</p>
        <p>
          New Special Brawl mode: War mode - KO players to steal their stocks!
        </p>
        <p>Big Head and Random Angle modes in Code Menu</p>
        <p>
          Boss tags: [TODO, also add notes on stamina and zero-to-death modes]
        </p>
        <p>
          Items: Press Start on Assist Trophies to toggle which Assist Trophies
          are active in a gameplay session
        </p>
        <p>
          Items: Press Start on Containers to toggle different properties for
          them
        </p>
        <p>
          Items: Press Start on Pokémon to toggle the appearances of Pokemon
          other than Mew, Celebi and Jirachi (these Pokemon are excluded as they
          are tied towards rewards and achievements)
        </p>
        <p>
          [TODO: Is this for modding only or how does this work?] Items: Added
          the option to make certain items spontaneously activate for maximum
          chaos
        </p>
        <p>
          New Item: Flipper! The Flipper from Balloon Fight has returned. Toggle
          on Bumpers to randomly have a chance of a Flipper spawning if Ex items
          are also enabled
        </p>
        <p>
          New Item Variant: Melee Screw Attack! The Melee version of the Screw
          Attack has returned, being able to be thrown. Toggle on Screw Attacks
          to randomly have a chance of its Melee variant spawning if Ex items
          are also enabled. Currently it does not send opponents into freefall.
        </p>
        <p>
          Items: Zapdos and Articuno have been added, behaving like in Melee.
          Toggle on Moltres if Ex items are also enabled to summon them from a
          Pokéball
        </p>
        <p>
          Items: The Goomba Assist Trophy has been added. Toggle on Hammer Bros.
          while EX items are also enabled to summon them.
        </p>
        <p>
          Items: Crates, Rolling Crates and Barrels can spawn enemies if
          enabled. Currently they can spawn Goombas and Hammer Bros.
        </p>
        <p>
          Items: New EX item: the Double Cherry! Those Ice Climbers won’t be the
          only ones to pair up now. Can be manually turned on or off by pressing
          START on the EX Item choice in Item Switch
        </p>
        <p>Containers can randomly explode if enabled in a toggle</p>
        <p>
          New Team Battle option added: Random Teams! New team pairs will be
          shuffled at random after every game
        </p>
        <p>Players on the same team spawn on the same side of the stage</p>
        <p>
          CPUs can now be set to level 0, “Ally”. Having an Ally as a teammate
          will allow players to control their own character and the CPU
          character simultaneously.
        </p>
        <p>UCF-style shield dropping</p>
        <p>
          Hazards are now toggle-able for select stages, which will swap things
          such as animations, collisions, and hazards when toggled between
          (Currently supported stages are Smashville, Yoshi’s Island, Green Hill
          Zone, Fountain of Dreams, Dream Land, and Dead Line)
        </p>
        <p>
          Presets can now be swapped between by pressing L or R on the random
          stage selection screen
        </p>
        <ul>
          <li>
            Included presets are as follows: Legal stages (default), PMBR, 2023
            Proposed, 2024 Proposed, Australia, Japan, and All stages
          </li>
        </ul>
        <p>
          A new mode has been added to Random Angle in the Code Menu: Static
          Random Angle! This will randomize angles for moves, then keep them
          that way for the entire match to allow for strategized setups.
        </p>
        <p>
          [TODO is tilt stick a new P+ feature? also what about charging smash
          attacks with C-stick?]
        </p>
        <p>Special BOSS mode</p>
        <ul>
          <li>
            If someone has a tag containing the word “BOSS”, “boss”, “Boss”, or
            “ボス”, then only players with those tags will experience special
            mode behaviors
          </li>
          <li>
            When used with “CPU Characters Can Use Tags”, assign the tag first,
            then switch the character to be a CPU!
          </li>
        </ul>
        <p>
          CPUs will now select between one of the 5 options of DI, instead of
          perfectly random DI, to better simulate how it would be with an actual
          opponent
        </p>
        <p>
          Training mode: New Selectable CPU Behaviors: Shield, Crouch, DI in,
          Slight DI In, No DI, Slight DI Out, DI Out, and Slight DI (which picks
          between middle 3 options)
        </p>
        <h3 className="title is-3">Subspace emissary (campaign mode)</h3>
        <p>
          Roy, Mewtwo & Knuckles are unlocked post-Tabuu clear (note: does not
          save on autosave, so unlock message will appear on the auto save file
          upon entering post-Tabuu clear)
        </p>
        <p>
          Hold L when selecting a level to override character selection and have
          all characters selectable
        </p>
        <p>Hold R during character selection to randomize cursor</p>
        <p>
          Hold Y during character selection to be able to select the same
          character twice
        </p>
        <p>
          Hold X while selecting a fully cleared level to start Time Attack
          mode, beat the level as fast as you can while defeating enemies to
          earn the highest score
        </p>
        <p>Hold Y while selecting a level to toggle displaying timer</p>
      </section>
    </main>
  );
}
