//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
// native method rewriting
 
function each(arr, callback) {
	for (var i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
}