export const getMusicTrack = () => {
	const roll = Math.random();

	if (roll > 0.9) {
		return `/project-wave/Tycho_-_Weather_(Nitemoves_Remix).webm`;
	} else if (roll > 0.5) {
		return `/project-wave/slam-dunk-ost-brand-new-day.ogg`;
	} else {
		return `/project-wave/saint-pepsi-around.ogg`;
	}
};

export const getVideo = () => {
	const video = document.createElement("video");
	video.playsInline = true;
	video.autoplay = true;
	video.loop = true;
	video.src = `/project-wave/bgloop.webm`;

	video.setAttribute(
		"style",
		`
			display: none;
			position: fixed;
			min-height: 100vh;
			top: 0;
			left: 0;
			min-width: 100vw;
			object-fit: cover;
			z-index: -100;
		`
	);

	return video;
};
