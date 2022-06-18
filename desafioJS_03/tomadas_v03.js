const input = '2 4 3 2';
var lines = input.split ('\n');

const t = lines.shift().split(' ').map(Number).reduce((n1,n2)=>n1+n2);
console.log(t-3);