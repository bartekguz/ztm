const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let newArray = [];

function answer(arr) {
  arr.sort(function(a, b) {
    return a-b
  });
  
  let toPush = 0;
  arr.forEach(function(num, i) {
    if (arr[i] === arr[i+1]) {
      toPush++;
    }
    else if (arr[i] !== arr[i + 1] && arr[i] === arr[i - 1]) {
    arr[i - toPush] = arr.slice(i - toPush, i+1);
    toPush = 0;
  }
});
  
   arr.forEach(function(num, ind) {
    while (arr[ind][0] && arr[ind][0] === arr[ind + 1]) {
      arr.splice(ind + 1, 1);
    }
  });
  return arr;
}

answer(array);