//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//
// native method rewriting

function map(arr, callback) {
	const arrNew = [];
	for (var i = 0; i < arr.length; i++) {
		arrNew.push(callback(arr[i]));
	}
	return arrNew;
}