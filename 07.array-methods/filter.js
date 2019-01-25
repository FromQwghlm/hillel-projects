//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
// native method rewriting

function filter(arr, callback) {
	const arrNew = [];
	for (var i = 0; i < arr.length; i++) {
		if (callback(arr[i])) arrNew.push(arr[i]);
	}
	return arrNew;
}