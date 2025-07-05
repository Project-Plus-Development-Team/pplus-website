import { HA1, HA2, HA3 } from "app/components/HA";
import Link from "next/link";
import { Note } from "../../components/Note";
import { QuestionMark } from "app/components/QuestionMark";

const Hackless = () => (
  <main className="content">
    <Link href="/install" className="tw:not-hover:no-underline">
      ← Installation methods
    </Link>
    <HA1 id="hackless-method">Install P+ — Hackless Method</HA1>
    <hr />
    <section>
      <HA2 id="what-is-hackless">What is the Hackless Method?</HA2>
      <p>
        The Hackless Method allows playing <em>Brawl</em> mods like Project+ on
        console without softmodding (hacking) it. It uses the{" "}
        <a href="https://www.wiibrew.org/wiki/Smash_Stack">
          Smash Stack exploit
        </a>{" "}
        and is only available on NTSC-U <QuestionMark href="/ntsc-pal" />.
      </p>
    </section>
    <hr />
    <section>
      <HA2 id="requirements">Requirements</HA2>
      <ul>
        <li>
          NTSC-U Nintendo Wii or vWii <QuestionMark href="/ntsc-pal" />
        </li>
        <li>
          NTSC-U <em>Super Smash Bros. Brawl</em> Disc{" "}
          <QuestionMark href="/ntsc-pal" />
        </li>
        <li>
          <strong>2GB</strong> SD Card
        </li>
        <li>
          <Link href="/download">Project+ Wii Lite</Link>
        </li>
      </ul>
    </section>
    <hr />
    <section>
      <HA2 id="advantages-disadvantages">Advantages and disadvantages</HA2>
      <div className="tw:flex tw:gap-4 tw:flex-wrap tw:*:basis-60 tw:*:grow">
        <div>
          <HA3 id="advantages" className="tw:font-bold">
            Advantages
          </HA3>
          <ul>
            <li>Does not require softmodding the console</li>
          </ul>
        </div>
        <div>
          <HA3 id="disadvantages" className="tw:font-bold">
            Disadvantages
          </HA3>
          <ul>
            <li>
              Only possible with a NTSC-U console and Disc
              <br />
              (See <a href="#requirements">Requirements</a>)
            </li>
            <li>Requires a 2GB SD Card, any other size doesn't work</li>
            <li>
              Requires a Wiimote to launch the game, can't be launched with a
              GameCube controller
            </li>
          </ul>
        </div>
      </div>
    </section>
    <hr />
    <section>
      <HA2 id="sd-card">2GB SD Card</HA2>
      <strong>The SD Card should be:</strong>
      <ul>
        <li>2GB</li>
        <li>Formatted to FAT32</li>
      </ul>
      <strong>The SD Card should not be:</strong>
      <ul>
        <li>
          SDHC or SDXC
          <Note className="my-1">
            SDHC and SDXC cards have a higher capacity and speeds than SD, but
            Brawl is limited to usage of 2GB SD cards or lower
          </Note>
        </li>
        <li>
          Locked
          <Note className="my-1">
            SD Cards often come with a slider on the side of it that put the
            card in a locked or unlocked state If the slider is in the locked
            position, Project+ will be unable to load
          </Note>
        </li>
        <li>Named "project+" or a derivative of it</li>
      </ul>
    </section>
    <hr />
    <section>
      <HA2 id="wii">NTSC Wii</HA2>
      <strong>The Wii should be:</strong>
      <ul>
        <li>Updated to the 4.3 firmware update</li>
        <li>
          NTSC <QuestionMark href="/ntsc-pal" />{" "}
        </li>
      </ul>
      <strong>The Wii should not be:</strong>
      <ul>
        <li>
          PAL or any other regional encoding besides NTSC{" "}
          <QuestionMark href="/ntsc-pal" />
          <Note className="my-1">
            If the Wii is not NTSC, the hackless method will not work for you,
            and you will need to utilize the{" "}
            <Link href="/install/usb-loading">USB loader method</Link> if you
            want to play P+ on a Nintendo Wii.
          </Note>
        </li>
      </ul>
    </section>
    <hr />
    <section>
      <HA2 id="disc">
        <em>Super Smash Bros. Brawl</em> Game
      </HA2>
      <strong>
        The <em>Brawl</em> disc and game should be:
      </strong>
      <ul>
        <li>
          NTSC <QuestionMark href="/ntsc-pal" />
          <Note className="my-1">
            <em>Brawl</em> or any other Wii game must match the encoding system
            it is being played on (games even on the same encoding system may be
            region-locked).
          </Note>
        </li>
        <li>
          The <em>Brawl</em> game save should have all custom stages removed in
          order to launch
          <Note className="my-1">
            <em>Brawl</em> comes with three custom stages by default and these
            must deleted before inserting the SD card with the Project+ files on
            it.
          </Note>
        </li>
        <li>
          The disc should not be excessively damaged
          <Note className="my-1">
            A damaged disc could cause issues with Project+ even will Brawl
            seems to be loading fine
          </Note>
        </li>
      </ul>
    </section>
    <hr />
    <section>
      <HA2 id="installation">Installation</HA2>
      <p>
        To install Project+ using the hackless method, please follow these
        instructions:
      </p>
      <ol>
        <li>
          If you have any custom stages on your save file of{" "}
          <em>Super Smash Bros. Brawl</em>, delete them.
          <Note className="my-1">
            Even if you haven't created any yourself, the game starts with three
            custom stages by default You can backup your custom stages onto an
            SD card before deleting them, if you want to use them for Brawl.
          </Note>
        </li>
        <li>
          Perform a Full Format your SD Card to FAT32 and with a 16 kilobyte
          cluster.
          <Note className="my-1">
            This will delete all contents on the SD Card, so if you have files
            on it already that you want to keep, be sure to save them elsewhere
            on your computer
          </Note>
        </li>
        <li>
          <Link href="/download">Download Project+ Wii Lite</Link>
        </li>
        <li>Extract the files from the downloaded zip file</li>
        <li>
          Move the extracted files onto the root of your SD card
          <Note className="my-1">
            The root means the first space you see (lowest level directory) when
            opening the SD Card. Do not create a folder inside the SD Card to
            put the files in.
          </Note>
        </li>
        <li>Insert the SD Card into your NTSC Nintendo Wii</li>
        <li>
          Turn on your Nintendo Wii and start <em>Super Smash Bros. Brawl</em>
        </li>
      </ol>
      <p>
        The above steps also work on a Nintendo Wii U as well; however, the Wii
        U does not natively support Gamecube controllers, so you will have to
        use Wii U peripherals.
      </p>
    </section>
    <hr />
    <section>
      <HA2 id="troubleshooting">Troubleshooting</HA2>
      <p>
        <strong>
          If Project+ does not load, please try these troubleshoots:
        </strong>
      </p>
      <ul>
        <li>Turn the Wii off and back on again</li>
        <li>Make sure the SD Card is 2GB</li>
        <li>
          Make the slider on the SD Card is not set to the “locked” position
        </li>
        <li>
          Make sure the card is not named “project+” or anything similar to that
        </li>
        <li>
          Make sure you are putting the files extracted from the zip into the
          root of the SD Card
        </li>
        <Note className="my-1">
          You should see <code>apps</code>, <code>private</code>,{" "}
          <code>Project+</code>, <code>boot.elf</code>, <code>credits.txt</code>{" "}
          as soon as you open the SD Card
        </Note>
        <li>
          Make sure both your game disc and Wii are NTSC{" "}
          <QuestionMark href="/ntsc-pal" />
        </li>
        <li>
          Make sure the disc is not particularly damaged, and consider cleaning
          it
        </li>
        <li>
          Reformat the SD Card to FAT32 and do a “Full Format” (not a quick
          format) and place the extracted files again in the root of the SD Card
        </li>
      </ul>
    </section>
    <hr />
    <section>
      <p>
        Still having issues? Join the <a href="/discord">Project+ Discord</a> to
        get help.
      </p>
    </section>
  </main>
);

export default Hackless;
