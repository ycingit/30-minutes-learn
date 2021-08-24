// x = y = "global";
// (function() {
//     console.log(x);
//     console.log(y);
//     x; // undefined
//     y; // Reference error: y is not defined

//     var x = "local";
//     let y = "local";
// }());
var c = 5;
{
    console.log(c);
    let a = 1;
    var b = 2;
    console.log(a)
}
console.log(b)

for (var i = 0; i < 10; i++) {
    // ...
}
  
console.log(i);
