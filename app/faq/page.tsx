import type { Metadata } from "next";
import styles from "./faq.module.scss";

export const metadata: Metadata = {
	title: "Frequently Asked Questions",
	description:
		"Find answers to common questions about installation details, ISOs, mod content and more!",
};

export default async function () {
	return (
		<main>
			<div className={`content ${styles.content}`}>
				<h1>Frequently Asked Questions</h1>
				<h4>
					Why is the name &quot;Project+&quot; and not &quot;Project M
					4.0&quot;?
				</h4>
				<p>
					Project+ is not an official continuation of Project M.
					Project M is the work of the PMDT which disbanded in 2015.
					Project+ does not attempt to produce suggested plans for
					Project M 4.0 and does not use any unreleased assets unless
					given permission by the original creators.
				</p>
				<h4>
					Is Project+ or Project M played at my local tournaments?
				</h4>
				<p>
					It's up to tournament organizers to decide which version to
					play and which rules they use (e.g. Auto L-Cancelling). Some
					regions play primarily the latest version of Project+, while
					others play the latest official version of Project M (3.6).
					Communities typically use the same Discord server for both
					games, so you're welcome to use our{" "}
					<a href="/find-communities">community map</a> to get
					started.
				</p>
				<h4>Will there be future versions of Project+?</h4>
				<p>Yes! Project+ is still in active development.</p>
				<h4>
					Is there a Netplay / Hackless / Homebrew / USB Loading
					release?
				</h4>
				<p>
					Yes, you can download them <a href="/download">here</a>.
				</p>
				<h4>What do I need to play Project+?</h4>
				<p>
					It depends on the method you will be using. For the hackless
					method (<a href="#ntsc-pal">NTSC-U</a>), you will need a
					Wii, an SD card that has a capacity of 2GB or less and a
					Brawl disc. For Dolphin/Netplay, you will need a computer
					and a NTSC-U Brawl ISO.
				</p>
				<h4>What do NTSC-U and PAL mean?</h4>
				<p>
					NTSC-U/J, PAL and SECAM refer to technical details on how TV
					systems worked that were relevant back when the Wii was a
					current-gen console. Game publishers may have to engineer
					their games differently based on the video system in a given
					region. They might use different patches that make games
					incompatible with consoles from other regions.
					<br />
					In the context of Wii games, this means the region where you
					bought your console and game (Brawl).
					<br />
					You can easily find out which kind of Wii or game disc you
					have by looking at{" "}
					<a href="https://upload.wikimedia.org/wikipedia/commons/0/0d/PAL-NTSC-SECAM.svg">
						this map on Wikipedia
					</a>
					.<br />
					&quot;SECAM&quot; is the same as PAL for Wii games.
					&quot;NTSC-U&quot; basically means &quot;NTSC USA&quot;, so
					North America and some parts of South America. We specify
					this because regions countries like Japan also have
					&quot;NTSC&quot;, but there are technical differences with
					both consoles and games. Therefore we call these systems
					&quot;NTSC-J&quot;. NTSC-J Brawl discs or ISO files are not
					compatible with Project+ or recent Project M versions.{" "}
					<strong>
						You can still play Project M and Project+ and all other
						Brawl mods on any system using{" "}
						<strong>USB-Loading</strong>.
					</strong>
					<br />
					However, the <em>hackless method</em> is only available when
					you have a NTSC-U console and disc.
				</p>
				<h4>What was changed from Project M?</h4>
				<p>
					Compared to vanilla 3.6, Project+ fixes bugs found in 3.6,
					adjusts characters, and is built on the Legacy TE 2.5 build
					which itself includes many new features and content.
					<br />
					For a list of changes, you can find a list of the changes
					across all versions <a href="/changes/all">here</a>.
				</p>
				<h4>What characters are in Project+?</h4>
				<p>
					Project+ includes the 41 characters of Project M 3.6 with
					the addition of <a href="/knuckles">Knuckles</a> as the 42nd
					character. There are no plans for additional characters.
				</p>
				<h4>
					Does Project+ have new characters in addition to Knuckles?
				</h4>
				<p>
					No new characters are planned to appear outside of Knuckles.
				</p>
				<h4>Does Project+ have rollback?</h4>
				<p>
					Unfortunately, Project+ currently does not have rollback.
					There's a project that's trying to implement rollback for
					Brawl called Brawlback. You can find their Discord here:{" "}
					<a href="/find-communities">Find Communities</a>.
				</p>
				<h4>Are there any new stages, costumes, or music?</h4>
				<p>
					Project+ includes many new stages, costumes, and music, with
					more on the way!
				</p>
				<h4>Is tilt stick (attack on C-stick) fixed in Project+?</h4>
				<p>
					Tilt stick when you assign the C-stick to &quot;Attack&quot;
					in the custom controls. In Project M, this setting didn't
					behave as expected and only worked properly for unangled
					F-tilt. Tilt stick is fixed in Project+ and works as
					expected (similar to Ultimate) which affects gameplay
					balance because certain manuveurs are only possible with
					tilt stick, which buffs some characters.
				</p>
				<h4>Does Project+ have L-Cancelling?</h4>
				<p>
					Yes. L-Cancelling is a technique from earlier games in the
					series and Project M where pressing a shield input before
					landing during an aerial attack reduces the landing lag. In
					Project+ you can L-Cancel within 7 frames of landing to
					reduce the landing lag by half.
					<br />
					However, &quot;Auto L-Cancel&quot; can be toggled on from
					the match settings to automatically reduce the landing lag
					of aerials without the need to perform an L-Cancel. In
					tournaments it's up to tournament organizers to determine if
					their tournament will run with &quot;Auto L-Cancel&quot;
					toggled on or off.
					<br />
					Auto L-Cancel is great for new or casual players or when you
					want a consistently fast gameplay experience. It also makes
					the game a bit less stressful on the hands, which can be an
					accessibility factor.
				</p>
				<h4>
					Can I build an ISO with Project+? Can I use BrawlBuilder
					with Project+?
				</h4>
				<p>
					It's not currently possible to use BrawlBuilder or a similar
					tool to build a Project+ ISO. Certain codes that Project+
					uses are not compatible with ISO building.
				</p>
				<h4>How do I obtain a Brawl ISO file?</h4>
				<p>
					You can legally create a backup of your Brawl disc by
					running{" "}
					<a href="https://wiibrew.org/wiki/CleanRip">
						CleanRip on a Wii
					</a>
					.
				</p>
				<h4>
					How can I play Netplay when the traversal servers are down?
					How can i play using direct IPs?
				</h4>
				<p>
					<a href="https://www.smashladder.com/guides/view/26jo/direct-ip-hosting">
						Direct IP Hosting Guide
					</a>
				</p>
				<h4>
					Can i add new characters to Project+? Does BrawlEx work with
					Project+?
				</h4>
				<p>
					<em>&quot;P+Ex&quot;</em> integrates the BrawlEx engine and
					CSS Expansion addon into Project+ to allow for an expanded
					roster of custom characters. For more information, check out{" "}
					<a href="https://docs.google.com/document/d/1mAoVGymOkL3FwiMxfEt1V24qxnAWiO8I66G3zlU0ij8/edit">
						this document
					</a>
					.
				</p>
				<h4>How do I set up my controller?</h4>
				<p>
					<a href="https://www.smashladder.com/guides/view/26oz/controller-guide-2-0">
						Click here for the Controller Guide
					</a>
					.
				</p>
				<h4>
					How can I set up my Wii U GameCube Controller Adapter on a
					Mac?
				</h4>
				<p>
					<a href="https://wiki.dolphin-emu.org/index.php?title=How_to_use_the_Official_GameCube_Controller_Adapter_for_Wii_U_in_Dolphin#macOS">
						How to use the Wii U GameCube Controller Adapter on Mac
					</a>
					.
				</p>
				<h4>How can I set up Project+ on Linux?</h4>
				<p>
					To install Project+ on Linux, install{" "}
					<a href="https://github.com/jlambert360/FPM-AppImage/releases">
						the AppImage from here
					</a>
					.
				</p>
				<h4>Can I play Project+ on an M1 Mac (ARM)?</h4>
				<p>
					We are planning to swap the base of our Dolphin build
					sometime in the future to restore Mac compatibility. M1 and
					beyond Macs will not be supported until this change occurs.
				</p>
				<h4>How do I know my Brawl ISO is compatible?</h4>
				<p>
					Check MD5's by right-clicking on Brawl, select{" "}
					<code>Properties</code> navigate to the <code>Info</code>{" "}
					tab, and click on the <code>Compute</code> button located to
					the right of <code>MD5 Checksum</code>. (
					<a href="https://i.imgur.com/xzye9my.png">Screenshot</a>)
					<br />
					If your game is not working, and the hash isn't listed here,
					it is probable that your ISO needs to be replaced.
					Compatible ISOs may include:
				</p>
				<ul>
					<li>d18726e6dfdc8bdbdad540b561051087</li>
					<li>d8560b021835c9234c28be7ff9bcaaeb</li>
					<li>5052e2e15f22772ab6ce4fd078221e96</li>
					<li>52ce7160ced2505ad5e397477d0ea4fe</li>
					<li>9f677c78eacb7e9b8617ab358082be32</li>
					<li>1c4d6175e3cbb2614bd805d32aea7311</li>
				</ul>
				<h4>Can I play Project+ on Android or iOS?</h4>
				<p>
					Short answer: Currently no. We don't know for sure if
					Project+ can be set up on iOS, but we think it's very
					unlikely. Regarding Android, there have been reports that
					current versions of Project+ work. Here's{" "}
					<a href="https://www.reddit.com/r/EmulationOnAndroid/comments/g39utj/how_to_run_project_and_other_brawl_mods_on/">
						a guide for <strong>old</strong> versions
					</a>{" "}
					that might not work with newer versions. If you've figured
					out up-to-date instructions or have written a guide, go
					ahead and <a href="/discord">let us know on our Discord</a>.
				</p>
			</div>
		</main>
	);
}
