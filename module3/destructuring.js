// coping an item, wich becomes independent of the original

let { PI } = Math;
PI; // 3.14

let { pi } = Math;
pi; // undefined

PI === Math.PI; // true
PI = 1;
PI === Math.PI; // false
