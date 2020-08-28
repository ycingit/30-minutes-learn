function aa() {
    var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "hello world.txt");
}

function bb() {
    var file = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});
    saveAs(file);
}