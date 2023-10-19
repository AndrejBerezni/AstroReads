function splitArray(arr: any[], size: number) {
  const splitArr = [];
  for (let i = 0; i < arr.length; i += size) {
    splitArr.push(arr.slice(i, i + size));
  }
  return splitArr;
}

export default splitArray;
