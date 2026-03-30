import { c_Ascii, getAscii } from "../constant/ascii";
import {
	u_GetBrightness,
	u_GetGRBA,
	u_IncreaseHexBrightness,
	u_RGBAtoHex,
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

	draw(ctx, dataFull, vWidth, params) {
		let pixel = u_GetGRBA(this._x, this._y, dataFull, vWidth);
		
		let brightness = u_GetBrightness(pixel);

		if (brightness >= params.minBrightness && brightness <= params.maxBrightness) {
			// this.drawSquare(ctx, brightness);

			brightness = params.invertBrightness ? 1 - brightness : brightness;

			let color = params.colorMode === "colored" ? u_RGBAtoHex(pixel) : params.color;

			this.drawAscii(ctx, color, brightness, params);
		}
	}

	drawSquare(ctx, color, brightness) {
		ctx.beginPath();
		ctx.fillStyle = color;

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

	drawAscii(ctx, color, brightness, params) {
		ctx.beginPath();
		ctx.fillStyle = params.boostBrightness > 0 ? u_IncreaseHexBrightness(color, params.boostBrightness) : color;
		ctx.font = `${this.size}px JetBrains Mono`;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.shadowColor = color;
		ctx.shadowBlur = 20 + brightness * 10; // ajouter un glow en fonction de la luminosité

		const offset = this.size * 0.5;
		let b = Math.floor(brightness * 10);

		// ctx.fillText(c_Ascii[b], this._x, this._y);
		ctx.fillText(getAscii(b, params.medianBrightness, params.asciiMode, params.asciiContrast), this._x, this._y);

		// ctx.fill();
		ctx.closePath();

		ctx.restore();
	}
}
