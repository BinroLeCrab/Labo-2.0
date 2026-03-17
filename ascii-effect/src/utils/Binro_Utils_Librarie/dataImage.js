export function u_GetGRBA(x, y, data, canvasWidth) {
	const idx = (y * canvasWidth + x) * 4;
	return [data[idx], data[idx + 1], data[idx + 2], data[idx + 3]];
}

export function u_GetBrightness([r, g, b], invert = false) {
	let moy = (r + g + b) / 3; //calcul de la moyenne sur 255 des trois couleurs
	const brightness = invert ? 1 - moy / 255 : moy / 255; //calcul de l'indice de luminosité sur 1 qui nous servira de scale

	return brightness;
}
