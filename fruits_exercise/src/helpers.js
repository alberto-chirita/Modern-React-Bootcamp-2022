function choice(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  const item = items[randomIndex];

  return item;
}

function remove(items, item) {
  const itemIndex = items.indexOf(item);
  items.splice(itemIndex, 1);
  return items;
}

export { choice, remove };
