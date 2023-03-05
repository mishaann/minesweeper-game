export function isValid(row, col, height, width) {
  return row >= 0 && row < height && col >= 0 && col < width;
}

export function getCount(row, col, isBomb) {
  let count = 0;
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      if (isBomb(row + y, col + x)) {
        count++;
      }
    }
  }
  return count;
}
