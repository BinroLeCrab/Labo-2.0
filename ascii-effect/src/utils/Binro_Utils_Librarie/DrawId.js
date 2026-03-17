export function u_DrawIdInOrder(current, length) {
    const id = current + 1;
    return id > length ? 0 : id;
}