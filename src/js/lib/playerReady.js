/* Check if upper part is finished */
export function upperPartReady(score) {
  const upperPart = score.slice(0, 6);
  const upperPartReady = upperPart.every(el => {
    return el !== 0;
  });
  return upperPartReady;
}

/* Check if both parts are finished */
export function bothPartsReady(score) {
  const bothPartsReady = score.every(el => {
    return el !== 0;
  });
  return bothPartsReady;
}