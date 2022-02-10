function splitArray(arrayToSplit, chunk) {
  let i;
  let j;
  let temporary;

  let resultArray = [];
  for (i = 0, j = arrayToSplit.length; i < j; i += chunk) {
    temporary = arrayToSplit.slice(i, i + chunk);
    resultArray.push(temporary);
  }

  return resultArray;
}

export { splitArray };
