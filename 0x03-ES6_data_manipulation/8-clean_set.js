function cleanSet(sets, startString) {
  if (startString === '') {
    return '';
  }

  const cleanedValues = [...sets]
    .filter(arr => arr.includes(startString))
    .map(arr => arr.substring(startString.length));

  return cleanedValues.join('-');
}

export default cleanSet;
