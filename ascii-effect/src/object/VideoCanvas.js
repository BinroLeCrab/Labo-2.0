class VideoCanvas {
	constructor() {}

	setup(canvas, video) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d");

		this.canvas.width = video.videoWidth;
		this.canvas.height = video.videoHeight;
		this.canvas.style.width = window.innerWidth + "px";
		this.canvas.style.height = window.innerHeight + "px";
	}

	update(video) {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.canvas.width = video.videoWidth;
		this.canvas.height = video.videoHeight;
		this.canvas.style.width = window.innerWidth + "px";
		this.canvas.style.height = window.innerHeight + "px";
		this.ctx.drawImage(video, 0, 0, this.canvas.width, this.canvas.height);
	}
}

export default VideoCanvas;
