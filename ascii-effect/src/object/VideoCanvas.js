class VideoCanvas {
	constructor() {}

	setup(canvas) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d");

		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.canvas.style.width = this.canvas.width + "px";
		this.canvas.style.height = this.canvas.height + "px";
	}

	update(video) {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.canvas.width = video.videoWidth;
        this.canvas.height = video.videoHeight;
		this.ctx.drawImage(video, 0, 0, this.canvas.width, this.canvas.height);
	}
}

const videoCanvas = new VideoCanvas();

export default videoCanvas;
