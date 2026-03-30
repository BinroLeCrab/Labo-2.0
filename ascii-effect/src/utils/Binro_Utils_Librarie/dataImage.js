export function u_GetGRBA(x, y, data, canvasWidth) {
	const idx = (y * canvasWidth + x) * 4;
	return [data[idx], data[idx + 1], data[idx + 2], data[idx + 3]];
}

export function u_GetBrightness([r, g, b], invert = false) {
	let moy = (r + g + b) / 3; //calcul de la moyenne sur 255 des trois couleurs
	const brightness = invert ? 1 - moy / 255 : moy / 255; //calcul de l'indice de luminosité sur 1 qui nous servira de scale

	return brightness;
}

export function u_RGBAtoHex([r, g, b, a]) {
	const toHex = (c) => c.toString(16).padStart(2, "0");
	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function u_IncreaseHexBrightness(hex, amount = 0) {
	const normalizedHex = hex.replace("#", "").trim(); 

	const safeAmount = Math.max(0, Math.min(1, amount));
	const r = parseInt(normalizedHex.slice(0, 2), 16);
	const g = parseInt(normalizedHex.slice(2, 4), 16);
	const b = parseInt(normalizedHex.slice(4, 6), 16);

	const brighten = (channel) => Math.round(channel + (255 - channel) * safeAmount);
	const toHex = (value) => value.toString(16).padStart(2, "0");

	return `#${toHex(brighten(r))}${toHex(brighten(g))}${toHex(brighten(b))}`;
}
