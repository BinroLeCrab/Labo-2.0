import Cell from "./Cell";

class AsciiCanvas {
	constructor() {
	}

	setup(canvas, ctxVideo, cellSize, gap) {
		this.canvas = canvas;
		this.ctxVideo = ctxVideo;
		this.ctx = this.canvas.getContext("2d");
		this.grid = [];

		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.canvas.style.width = this.canvas.width + "px";
		this.canvas.style.height = this.canvas.height + "px";

		this.createGrid(cellSize, gap);
	}

	createGrid(cellSize, gap) {
		const lines = canvas.height / (cellSize + gap); //calcul du nombre de lignes en fonction de la taille du canvas et des cellules
		const cols = canvas.width / (cellSize + gap);

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

	draw() {
		this.grid.forEach((cell) => {
			cell.draw(this.ctx, 1);
		});
	}
}

const asciiCanvas = new AsciiCanvas();

export default asciiCanvas;