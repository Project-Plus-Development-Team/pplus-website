import { HA1, HA2 } from "app/components/HA";

const NtscPal = () => (
  <main className="content">
    <HA1 id="ntsc-pal">NTSC & PAL</HA1>
    <hr />
    <section>
      <HA2 id="ntsc">What is NTSC?</HA2>
      <p>
        NTSC is an encoding system used in North America (NTSC-U) (excluding
        Greenland), parts of South America, Japan (NTSC-J), and other regions in
        the world.
      </p>
      <p>If you bought a Wii new in North America, it will be NTSC-U.</p>
    </section>
    <hr />
    <section>
      <HA2 id="ntsc">What is PAL?</HA2>
      <p>
        PAL is the European standard encoding system and is used in many places
        throughout the world.
      </p>
    </section>
  </main>
);

export default NtscPal;
