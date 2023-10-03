function hasValuesFromArray(set, arrays) {
  const check = arrays.every(array => set.has(array));
  return check;
}

export default hasValuesFromArray;
