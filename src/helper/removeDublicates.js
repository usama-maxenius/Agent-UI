export const addToArray = (arry, obj, key) => {
  let copyArray = [...arry];
  if (copyArray.length) {
    const isExist = copyArray.find((s) => s[key] === obj[key]);
    if (isExist) {
      copyArray = copyArray.filter((s) => s.schoolid !== obj.schoolid);
    } else copyArray.push(obj);
  } else copyArray.push(obj);
  return copyArray;
};
export const updateObjectInArray = (arry, obj, key) => {
  let copyArray = [...arry];
  if (copyArray.length) {
    copyArray = copyArray.map((s) => {
      if (s[key] === obj[key]) {
        s = obj;
        return s;
      }
      return s;
    });
  } else copyArray.push(obj);
  return copyArray;
};
