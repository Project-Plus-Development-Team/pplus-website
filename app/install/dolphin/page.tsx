import { HA1, HA2, HA3 } from "app/components/HA";
import { Note } from "app/components/Note";
import Link from "next/link";

const Dolphin = () => (
  <main className="content">
    <section>
      <Link href="/install" className="tw:not-hover:no-underline">
        ← Installation methods
      </Link>
      <HA1 id="dolphin">Install P+ — Dolphin</HA1>
      <p>
        Please read this setup and troubleshoot guide for setting up Project+
        Dolphin builds for computers to see if it answers your questions before
        posting in the <a href="/discord">support channels</a>.
      </p>
    </section>
    <hr />
    <section>
      <HA2 id="requirements">Requirements</HA2>

      <HA3 id="iso">
        NTSC-U <em>Super Smash Bros. Brawl</em> ISO (~7.92GB)
      </HA3>
      <p>
        For a list of compatible ISOs, you can check out this link:{" "}
        <a href="https://www.smashladder.com/guides/view/2657/brawl-iso-md5-checksum-check">
          https://www.smashladder.com/guides/view/2657/brawl-iso-md5-checksum-check
        </a>
      </p>

      <HA3 id="netplay-build">
        Project+ Netplay Build for your Operating System
      </HA3>
      <p>
        You will need to find the Project+ Netplay build that corresponds to
        your operating system (Windows, Mac, or Linux). There is no offline or
        online difference between builds; these Netplay builds can be played
        offline locally from the computer as well as online over Netplay from
        the same build.
      </p>

      <HA3 id="computer">A Computer</HA3>
      <p>
        It doesn't take a particularly powerful computer to run Project+ on
        Dolphin, but better specs will allow you to do more including playing at
        higher resolutions, utilizing the HD textures, and record and stream
        using other programs all of which may be too taxing on lower specs. If
        your computer is not powerful enough, you may experience a drop in
        frames per second producing a choppy experience.
      </p>
      <p>
        Your computer must have at least 3GB of free space for the Project+
        Build (that you can download from the Project+ website), and
        approximately an additional 8GB of space for the Brawl ISO (that you
        will find on your own)
      </p>
      <p>
        To ensure the best performance from your computer, please update:
        <br />
        DirectX:{" "}
        <a href="https://www.microsoft.com/en-us/download/confirmation.aspx?id=35">
          https://www.microsoft.com/en-us/download/confirmation.aspx?id=35
        </a>
        <br />
        Visual C++:{" "}
        <a href="https://www.microsoft.com/en-us/download/details.aspx?id=48145">
          https://www.microsoft.com/en-us/download/details.aspx?id=48145
        </a>
      </p>

      <HA3 id="controller">Controller(s)</HA3>
      <p>
        You can play on keyboard, but it isn't particularly popular or advisable
        to do so. Various controllers can be used, but GameCube controllers are
        typically the go-to peripheral for tournaments and consequently are the
        most popular controller for Project+ on Dolphin. Controllers that have a
        USB connection should be recognized by Dolphin and immediately ready for
        button mapping from Dolphin's controller setting; however, since most
        GameCube controllers have the GameCube port connection, an adapter is
        needed to connect the GameCube controller to the computer.
      </p>
      <p>
        <strong>
          For more information about controllers, adapters, and using them with
          Dolphin, please refer to this Controller Guide:
          <br />
          <a href="https://www.smashladder.com/guides/view/26oz/controller-guide-2-0">
            https://www.smashladder.com/guides/view/26oz/controller-guide-2-0
          </a>
        </strong>
      </p>
      <Note>
        About Nintendo Wii Nunchuck Controllers:
        <br />
        Nintendo Wii Nunchuks currently do not work with Project+ v2.0, but they
        will be functional in the bugfix patch.
      </Note>
    </section>
    <hr />
    <Note>Rest of page/guide is WIP</Note>
    <hr />
    <section>
      <p>
        Still having issues? Join the <a href="/discord">Project+ Discord</a> to
        get help.
      </p>
    </section>
  </main>
);

export default Dolphin;
