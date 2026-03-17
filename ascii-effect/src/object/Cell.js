import { c_Ascii } from "../constant/ascii";
import {
	u_GetBrightness,
	u_GetGRBA,
} from "../utils/Binro_Utils_Librarie/dataImage";

export default class Cell {
	constructor(x, y, size) {
		this._x = x;
		this._y = y;
		this.size = size;
		// this._xCurr = x;
		// this._yCurr = y;
		// this.brightness = brightness;
		// this.color = color;
	}

	draw(ctx, dataFull, vWidth, min, max) {
		let pixel = u_GetGRBA(this._x, this._y, dataFull, vWidth);
		let brightness = u_GetBrightness(pixel);

		if (brightness >= min && brightness <= max) {
			// this.drawSquare(ctx, brightness);
			this.drawAscii(ctx, brightness);
		}
	}

	drawSquare(ctx, brightness) {
		ctx.beginPath();
		ctx.fillStyle = "white";

		ctx.save();
		ctx.translate(this._x, this._y);

		ctx.translate(this.size / 2, this.size / 2);
		ctx.scale(brightness, brightness); // scale en fonction de la luminosité
		ctx.translate(-this.size / 2, -this.size / 2);

		// const offset = this.size * .5
		// ctx.arc(0 + offset, 0 + offset, this.size / 2, 0, Math.PI * 2)

		const offset = this.size * 0.5;
		ctx.rect(0 - offset, 0 - offset, this.size, this.size);

		ctx.fill();
		ctx.closePath();

		ctx.restore();
	}

    drawAscii(ctx, brightness) {
		ctx.beginPath();
		ctx.fillStyle = "white";
        ctx.font = `${this.size}px sans-serif`
        ctx.textAlign = 'center';
        ctx.textBaseline = "middle";

		const offset = this.size * 0.5;
        let b = Math.floor(brightness * 10);

        ctx.fillText(c_Ascii[b], this._x, this._y);

		// ctx.fill();
		ctx.closePath();

		ctx.restore();
	}
}
