import { HA1, HA2 } from "app/components/HA";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Frequently Asked Questions",
	description:
		"Find answers to common questions about installation details, ISOs, mod content and more!",
};

const FAQ = () => (
	<main className="content">
		<HA1 id="frequently-asked-questions">Frequently Asked Questions</HA1>
		<hr />
		<section>
			<HA2 id="rollback">Does Project+ have Rollback?</HA2>
			<p>
				Unfortunately, Project+ does not have rollback netcode. While it has
				been heavily anticipated since the release of Slippi for Melee, Project+
				faces significant barriers to the development of rollback netcode with
				its size, complexity, and the lack of available manpower. The ongoing
				Brawlback project seeks to implement rollback netcode and matchmaking
				into Super Smash Bros. Brawl and its mods such as Project+. There is
				currently no timetable for its completion and release.
			</p>
			<p>
				Brawlback and its development are not associated with the Project+
				development team or this website. If you would like to learn more about
				Brawlback or support its development, you can join the Brawlback Discord
				community on the <Link href="/find-communities">Find Communities</Link>{" "}
				page.
			</p>
		</section>
		<hr />
		<section>
			<HA2 id="matchmaking">Does Project+ have matchmaking like Slippi?</HA2>
			<p>
				Unfortunately, Project+ does not have matchmaking like Slippi. Most
				matchmaking happens through Discord. See{" "}
				<a href="#rollback">Rollback</a> for more information and{" "}
				<Link href="/find-communities">Find Communities</Link> to find
				communities for matchmaking.
			</p>
		</section>
		<hr />
		<section>
			<HA2 id="tier-list">Does Project+ have a tier list?</HA2>
			<p>
				Yes, you can find the current Project+ community tier list here:{" "}
				<a href="https://smashboards.com/threads/new-community-project-v3-0-5-tier-list-released.524140/">
					Community Project+ v3.0.5 Tier List
				</a>
			</p>
		</section>
		<hr />
		<section>
			<HA2 id="project-m">Is Project+ the continuation of Project M?</HA2>
			<p>
				Project+ is not an official continuation of Project M. Project M is the
				work of the PMDT which disbanded in 2015. Project+ doesn't use
				unreleased PMDT assets unless given permission by the original creators.
			</p>
		</section>
		<hr />
		<section>
			<HA2 id="tournaments">
				Is Project+ or Project M played at my local tournaments?
			</HA2>
			<p>
				Tournament organizers decide which game, version, and rules their
				tournament will be using. Some regions primarily play the latest version
				of Project+ while some play the final official version of Project M. You
				can use the community map to find links to socials for your local
				community to help you get started and find tournaments near you.
			</p>
		</section>
		<hr />
		<section>
			<HA2 id="updates">Will there be future updates to Project+?</HA2>
			<p>Yes! Project+ is still in active development.</p>
		</section>
		<hr />
		<section>
			<HA2 id="netplay-hackless-homebrew-usb-loading">
				Does Project+ have a Netplay / Hackless / Homebrew / USB Loader release?
			</HA2>
			<p>
				Yes, you can download them from the{" "}
				<Link href="/download">Download</Link> page.
			</p>
		</section>
		<hr />
		<section>
			<HA2 id="requirements">What do I need to play Project+?</HA2>
			<div className="table-container">
				<table className="table is-narrow is-bordered tw:w-full tw:**:align-middle">
					<thead>
						<tr>
							<th className="tw:min-w-30">Platform</th>
							<th className="tw:min-w-30">Region</th>
							<th className="tw:min-w-40">Method</th>
							<th className="tw:min-w-50">Requirements</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowSpan={6}>Wii</td>
							<td rowSpan={3}>NTSC-U</td>
							<td>Hackless</td>
							<td>
								<ul>
									<li>NTSC-U SSBB Disc</li>
									<li>{"<"} 2GB SD Card</li>
									<li>Wiimote to launch</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td>Homebrew (Disc)</td>
							<td>
								<ul>
									<li>NTSC-U SSBB Disc</li>
									<li>{"<"} 128GB SD Card</li>
									<li>Homebrew channel</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td rowSpan={4} className="tw:h-40">
								USB Loading
							</td>
							<td rowSpan={4}>
								<ul>
									<li>NTSC-U SSBB ISO</li>
									<li>8GB+ USB Drive</li>
									<li>{"<"} 128GB SD Card</li>
									<li>Homebrew channel</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td>PAL</td>
						</tr>
						<tr>
							<td>NTSC-J</td>
						</tr>
						<tr>
							<td>NTSC-K</td>
						</tr>
						<tr>
							<td>Windows</td>
							<td rowSpan={3}>n/a</td>
							<td rowSpan={3}>Dolphin</td>
							<td rowSpan={3}>
								<ul>
									<li>NTSC-U SSBB ISO</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td>Linux</td>
						</tr>
						<tr>
							<td>Mac OS</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
		<hr />
		<section>
			<HA2 id="ntsc-pal">What do NTSC and PAL mean?</HA2>
			<p>
				NTSC is one of several audio and visual standards for TV systems and
				NTSC-U refers specifically to the United States variant. Game developers
				engineered specific versions of games and systems to match the video
				systems of specific regions, so there are differences that make a
				mismatch of regional games and consoles incompatible. Project M and
				Project+ are designed for the NTSC-U versions of the Wii and Super Smash
				Bros. Brawl, so they are incompatible with versions from other regions
				(such as the PAL version that is prominent in Europe).
			</p>
			<p>
				<strong>
					You can play Project M and Project+ as well as any other Brawl mod on
					any system using the{" "}
					<Link href="/install/usb-loader">USB Loader method</Link>.
				</strong>
			</p>
			<p>
				To play Project+ on Dolphin/Netplay, see the{" "}
				<Link href="/install/dolphin">Dolphin Guide</Link>.
			</p>
			<p>
				How do I set up Project+ on Linux? To install Project+ on Linux, install
				the AppImage from here:
				<a href="https://github.com/jlambert360/FPM-AppImage/releases">
					https://github.com/jlambert360/FPM-AppImage/releases
				</a>
			</p>
		</section>
		<hr />
		<section>
			<HA2 id="iso">
				How do I obtain a <em>Brawl</em> ISO?
			</HA2>
			<p>
				You can legally create a backup of your Brawl disc by running{" "}
				<a href="https://wiibrew.org/wiki/CleanRip">CleanRip</a> on a Wii.
			</p>
		</section>
		<hr />
		<section>
			<HA2 id="iso-compatible">How do I know my Brawl ISO is compatible?</HA2>
			<p>
				To check the compatibility of your Brawl ISO, you need to check its MD5
				in Dolphin. From the Dolphin window, right click on Brawl and select{" "}
				<code>Properties</code>, navigate to the <code>Info</code> tab, and then
				click the <code>Compute</code> button located to the right of{" "}
				<code>MD5 Checksum</code> as seen in this{" "}
				<a href="https://imgur.com/xzye9my">screenshot</a>.
			</p>
			<p>Compatible ISOs may include:</p>
			<ul>
				<li>d18726e6dfdc8bdbdad540b561051087</li>
				<li>d8560b021835c9234c28be7ff9bcaaeb</li>
				<li>5052e2e15f22772ab6ce4fd078221e96</li>
				<li>52ce7160ced2505ad5e397477d0ea4fe</li>
				<li>9f677c78eacb7e9b8617ab358082be32</li>
				<li>1c4d6175e3cbb2614bd805d32aea7311</li>
			</ul>
			<p>
				If your game is not working, and the hash isn't listed here, it is
				probable that your ISO needs to be replaced.
			</p>
		</section>
		<hr />
		<section>
			<HA2 id="build-iso">
				Can I build an ISO with Project+? Can I use BrawlBuilder with Project+?
			</HA2>
			<p>
				It's not currently possible to use BrawlBuilder or a similar tool to
				build a Project+ ISO. Certain codes that Project+ uses are not
				compatible with ISO building.
			</p>
		</section>
		<hr />
		<section>
			<HA2 id="controller">How do I setup my controller?</HA2>
			<a href="https://www.smashladder.com/guides/view/26oz/controller-guide-2-0">
				Click here for Smashladder's Controller Guide.
			</a>
		</section>
		<hr />
		<section>
			<HA2 id="gamecube-mac">
				How do I set up my Wii U GameCube adapter on a Mac?
			</HA2>
			<p>
				Click here for the guide to use the Wii U GameCube Controller Adapter on
				Mac.
			</p>
		</section>
		<hr />
		<section>
			<HA2 id="changes">
				What are the changes and additions compared to Project M?
			</HA2>
			<p>
				Compared to vanilla Project M 3.6, Project+ fixes bugs found in 3.6,
				adjusts characters, adds new costumes, stages, and music, and is built
				on the Legacy TE 2.5 build which itself includes many new features and
				content. You can find a list of the changes across all versions on the{" "}
				<Link href="/changes/all">All Changes</Link> page.
			</p>
		</section>
		<hr />
		<section>
			<HA2 id="characters">Will Project+ have new characters?</HA2>
			<p>
				Project+ v2.0 added <Link href="/knuckles">Knuckles</Link> as the 42nd
				character to the 41 characters featured in Project M 3.6; however, there
				are no plans to add any additional characters.
			</p>
		</section>
		<hr />
		<section>
			<HA2 id="brawlex">
				Can I add new characters to Project+? Does BrawlEX work with Project+?
			</HA2>
			<p>
				"P+Ex" integrates the BrawlEx engine and CSS Expansion add-on into
				Project+ to allow for an expanded roster of custom characters. For more
				information, check out{" "}
				<a href="https://docs.google.com/document/d/1mAoVGymOkL3FwiMxfEt1V24qxnAWiO8I66G3zlU0ij8">
					this Google Docs document
				</a>
				.
			</p>
		</section>
		<hr />
		<section>
			<HA2 id="tilt-stick">Is Tilt Stick fixed in Project+?</HA2>
			<p>
				Yes, Project+ has working Tilt Stick.
				<br />
				See the{" "}
				<Link href="/features#training-practice-controls">
					Features page
				</Link>{" "}
				for details.
			</p>
		</section>
		<hr />
		{/*<h4>Are there any new stages, costumes, or music?</h4>
      <p>
        Project+ includes many new stages, costumes, and music, with more on the
        way!
      </p> */}
		<section>
			<HA2 id="l-canceling">Does Project+ have L-Canceling?</HA2>
			<p>
				Yes. L-Cancelling is a technique from earlier games in the series and
				Project M where pressing a shield input before landing during an aerial
				attack reduces the landing lag. In Project+ you can L-Cancel within 7
				frames of landing to reduce the landing lag by half.
			</p>
			<p>
				However, "Auto L-Cancel" can be toggled on from the match settings to
				automatically reduce the landing lag of aerials without the need to
				perform an L-Cancel. Auto L-Cancel is great for new or casual players or
				when you want a consistently fast gameplay experience. It also makes the
				game a bit less stressful on the hands, which can be an accessibility
				factor.
			</p>
			<p>
				{/* TODO: Just link to <Link href="/features">Features page</Link>? */}
				In tournaments, it is up to tournament organizers to determine if their
				tournament will run with "Auto L-Cancel" toggled on or off.
			</p>
		</section>
		<h4>
			How can I play Netplay when the traversal servers are down? How can i play
			using direct IPs?
		</h4>
		<p>
			<a href="https://www.smashladder.com/guides/view/26jo/direct-ip-hosting">
				Direct IP Hosting Guide
			</a>
		</p>
		<hr />
		<section>
			<HA2 id="linux">How can I set up Project+ on Linux?</HA2>
			<p>
				To install Project+ on Linux, install{" "}
				<a href="https://github.com/jlambert360/FPM-AppImage/releases">
					the AppImage from here
				</a>
				.
			</p>
		</section>
		<hr />
		<h4>Can I play Project+ on an M1 Mac (ARM)?</h4>
		<p>
			We are planning to swap the base of our Dolphin build sometime in the
			future to restore Mac compatibility. M1 and beyond Macs will not be
			supported until this change occurs.
		</p>
	</main>
);

export default FAQ;
