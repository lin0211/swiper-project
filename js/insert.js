export function insertLast(node, text) {
  // if (typeof node === "string") node = getNode(node);

  node.insertAdjacentHTML("beforeend", text);
}
