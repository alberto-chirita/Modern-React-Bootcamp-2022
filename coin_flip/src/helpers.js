function choice(arr) {
  const randIndex = Math.floor(Math.random() * arr.length);

  return arr[randIndex];
}

export { choice };
