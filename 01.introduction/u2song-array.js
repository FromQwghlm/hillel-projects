// Theme: Console.log()
// Description: some song by U2... [Array edition]

console.log('some song by U2 from Batman Forever OST [Array edition]:');

var doWhat = ['Hold', 'thrill', 'kiss', 'kill'];
var whom="me";
for (var i=0; i < doWhat.length; i++) {
    if (i <= doWhat.length - i) {
      console.log(doWhat[i] + ' ' + whom + ',');
    } else {
      console.log(doWhat[i] + ' ' + whom + '.');
    }
}