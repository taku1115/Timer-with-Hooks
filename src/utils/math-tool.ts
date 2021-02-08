const setMax = (number: number): number => {
  return number % 2 === 1 ? number + 1 : number;
}

export const getHalf = (maxNumber: number): number => {
  return setMax(maxNumber) / 2;
}