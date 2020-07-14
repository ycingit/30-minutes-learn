x = y = "global";
(function() {
    console.log(x);
    console.log(y);
    x; // undefined
    y; // Reference error: y is not defined

    var x = "local";
    let y = "local";
}());