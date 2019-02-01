//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
// fEach([1,2,3,4], function(num) { })
 
function each(arr, callback) {
	for (var i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
}

each([1, 2, 3], function(num) {
	console.log('Number: ' + num)
  });

  // Number: 1
  // Number: 2
  // Number: 3