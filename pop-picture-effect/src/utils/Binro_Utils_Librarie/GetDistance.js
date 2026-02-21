export function u_GetDistance(from, to) {
	let dx = from[0] - to[0];
	let dy = from[1] - to[1];

	return Math.sqrt(dx * dx + dy * dy);
}

export function u_GetDistance3D(from, to) {
	let dx = from[0] - to[0];
	let dy = from[1] - to[1];
    let dz = from[2] - to[2];

	return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

