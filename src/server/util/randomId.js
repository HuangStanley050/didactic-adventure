import animeData from "../../animeData";

const BinarySearch = (sorted, start, end, key) => {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  console.log(sorted[mid][0]);
  // console.log(key.toString());
  if (sorted[mid][0] === key.toString()) {
    console.log(key.toString());
    console.log(sorted[mid][0]);
    return mid;
  }
  if (key.toString() > sorted[mid][0]) {
    return BinarySearch(sorted, mid + 1, end, key);
  } else if (key < sorted[mid]) {
    return BinarySearch(sorted, start, mid - 1, key);
  }
};

const randomId = defaultId => {
  const animes = Object.keys(animeData).length;
  const selection = Math.floor(Math.random() * animes) + 1;
  const animeArray = Object.entries(animeData);
  //console.log(animeArray.length - 1);
  // let returnValue = BinarySearch(
  //   animeArray,
  //   0,
  //   animeArray.length - 1,
  //   defaultId
  // );
  for (const [id, title] of animeArray) {
    if (id === selection.toString()) {
      defaultId = id;
      break;
    }
  }
  // console.log("inside randomId");
  // console.log(returnValue);
  return defaultId;
};

export default randomId;
