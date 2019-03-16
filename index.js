// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  let distanceBlock
  if (block > 42) {
    distanceBlock = block - 42;
  } else {
    distanceBlock = 42 - block;
  }
  return distanceBlock
}

function  distanceFromHqInFeet(block) {
  let distanceFeet = distanceFromHqInBlocks(block) * 264;
  return distanceFeet
}

function distanceTravelledInFeet(start, finish) {
  let distance
  if (start > finish) {
    distance = (start - finish) * 264;
  } else {
    distance = (finish - start) * 264;
  }
  return distance
}
