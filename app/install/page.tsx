import { HA1, HA2, HA3 } from "app/components/HA";
import { QuestionMark } from "app/components/QuestionMark";
import Link from "next/link";

const Install = () => (
  <main className="content">
    <HA1 id="install">Install Project+</HA1>
    <hr />
    <section>
      <HA2 id="console">Wii, Wii-U, vWii</HA2>
      <div className="tw:flex tw:flex-wrap tw:gap-4 tw:basis-10 tw:*:grow">
        <div>
          <div className="tw:flex tw:gap-2">
            <HA3 id="ntsc-u">NTSC-U</HA3>
            <div>
              <QuestionMark href="/ntsc-pal" />
            </div>
          </div>
          <nav className="tw:**:not-hover:no-underline">
            <ul>
              <li>
                <Link href="/install/hackless">Hackless</Link>
              </li>
              <li>
                <Link href="/install/homebrew">Homebrew</Link> (Disc) (TODO)
              </li>
              <li>
                <Link href="/install/usb-loading">USB Loading</Link> (TODO)
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div className="tw:flex tw:gap-2">
            <HA3 id="pal">PAL, NTSC-J, NTSC-K</HA3>
            <div>
              <QuestionMark href="/ntsc-pal" />
            </div>
          </div>
          <nav className="tw:**:not-hover:no-underline">
            <ul>
              <li>
                <Link href="/install/usb-loading">USB Loading</Link> (TODO)
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    <hr />
    <section>
      <HA2 id="dolphin">Windows, Mac OS, Linux</HA2>
      <nav className="tw:**:not-hover:no-underline">
        <ul>
          <li>
            <Link href="/install/dolphin">Dolphin</Link> (WIP)
          </li>
        </ul>
      </nav>
    </section>
  </main>
);

export default Install;
