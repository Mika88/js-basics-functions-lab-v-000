// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  let distance
  if (block > 42) {
    distance = block - 42;
  } else {
    distance = 42 - block;
  }
  return distance
}