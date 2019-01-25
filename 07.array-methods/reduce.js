//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
// native method rewriting

function reduce(arr, fn, callback) {
  result = fn;
  for (var i = 0; i < arr.length; i++) {
    result = callback.call(null, result, arr[i], i, arr);
  }
  return result;
}