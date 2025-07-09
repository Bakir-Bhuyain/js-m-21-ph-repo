let a = 5;
let b = 7;
console.log(a,b);
const temp = a;
a=b;
b=temp;
console.log(a,b);


//----------------
let x = 5;
let y = 7;
console.log(x, y);
[x,y] = [y,x];
console.log(x,y);


let u = 10;
let o = 30;
console.log(u, o);
const emp = u;
u = o;
o = emp;
console.log(u, o);

let g = 90;
let h = 25;
console.log(g, h);
[g, h] = [h, g];
console.log(g, h);