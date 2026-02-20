const canvas = document.getElementById("canvas");

let isDrawing=false;

canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;
canvas.style.width = canvas.width / 2 + "px";
canvas.style.height = canvas.height / 2 + "px";

const brush = canvas.getContext("2d");
brush.fillStyle = "rgba(235, 241, 238, 0.97)";
brush.fillRect(0, 0, canvas.width, canvas.height);

const h1 = document.querySelector(".content");

let img = new Image();
img.src = "/wet-leg_logoB.png";

img.onload = function () {
	const width = canvas.width * 0.6;

	const l = width > 1080 * 2 ? 1080 * 2 : width;
	const h = (img.height / img.width) * l;
	const x = (canvas.width - l) / 2;
	const y = (canvas.height - h) / 2;

	brush.globalCompositeOperation = "source-over";
	brush.drawImage(img, x, y, l, h);
	brush.globalCompositeOperation = "destination-out";
};

brush.lineCap = "round";
brush.lineWidth = 150 * 2;
brush.shadowColor = "rgba(255, 255, 255, 0.5)";
brush.shadowBlur = 42;

let previousX,
	previousY = null;

brush.globalCompositeOperation = "destination-out";

canvas.addEventListener("mousedown", (e) => {
	isDrawing = true;
});

canvas.addEventListener("mouseup", (e) => {
	isDrawing = false;
});

window.addEventListener("mousemove", (e) => {

  if (!isDrawing) return;

	const rect = canvas.getBoundingClientRect();
	const x = (e.clientX - rect.left) * 2;
	const y = (e.clientY - rect.top) * 2;

	if (previousX !== null && previousY !== null) {
		brush.beginPath();
		brush.moveTo(previousX, previousY);
		brush.lineTo(x, y);
		brush.stroke();
	}
	previousX = x;
	previousY = y;

	brush.beginPath();
	brush.arc(x, y, brush.lineWidth / 2, 0, Math.PI * 2);
	brush.fill();
});
