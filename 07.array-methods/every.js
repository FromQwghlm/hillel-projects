//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
// native method rewriting

function every(arr, callback) {
	for (var i = 0; i < arr.length; i++) {
		if (!callback(arr[i])) return false;
	}
	return true;
}