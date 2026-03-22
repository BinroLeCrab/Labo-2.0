import Cell from "./Cell";

class AsciiCanvas {
	constructor() {}

	setup(canvas, cellSize, gap, canvasVideo) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d");
		this.grid = [];

		this.canvas.width = canvasVideo.canvas.width;
		this.canvas.height = canvasVideo.canvas.height;
		this.canvas.style.width = window.innerWidth + "px";
		this.canvas.style.height = window.innerHeight + "px";

		this.createGrid(cellSize, gap);
	}

	createGrid(cellSize, gap) {

		this.grid = [];
		
		const lines = this.canvas.height / (cellSize + gap); //calcul du nombre de lignes en fonction de la taille du canvas et des cellules
		const cols = this.canvas.width / (cellSize + gap);

		for (let iy = 0; iy < lines; iy++) {
			for (let ix = 0; ix < cols; ix++) {
				let x = ix * (cellSize + gap); //definition du x de la cellule
				let y = iy * (cellSize + gap); //definition du y de la cellule

				let cell = new Cell(x, y, cellSize);
				this.grid.push(cell);
				// fetchDataImage(x, y); // fct de création de la cellules
			}
		}
	}

	draw(canvasVideo, minB, maxB, color) {
		if (!canvasVideo || !canvasVideo.ctx || !canvasVideo.canvas || canvasVideo.canvas.width === 0 || canvasVideo.canvas.height === 0) return;

		this.canvas.width = canvasVideo.canvas.width;
		this.canvas.height = canvasVideo.canvas.height;
		this.canvas.style.width = window.innerWidth + "px";
		this.canvas.style.height = window.innerHeight + "px";

		const vWidth = canvasVideo.canvas.width;
		const dataFull = canvasVideo.ctx.getImageData(0, 0, canvasVideo.canvas.width, canvasVideo.canvas.height).data
		// console.log(dataFull);
		// console.log(canvasVideo, canvasVideo.ctx, canvasVideo.canvas, canvasVideo.canvas.width, canvasVideo.canvas.height);
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // reset du canvas

		this.grid.forEach((cell) => {
			cell.draw(this.ctx, dataFull, color, vWidth, minB, maxB);
		});
	}
}

const asciiCanvas = new AsciiCanvas();

export default asciiCanvas;
