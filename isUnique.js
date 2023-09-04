var a = ['b', 1, 'b', 2, '3'];
var unique = a.filter((value, index, array) => array.indexOf(value) === index);

console.log(unique); // ['b', 1, 2, '3']
