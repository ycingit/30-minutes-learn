export function bar () {
    return 'bar';
}

export function foo (_bar = bar) {
    return `I am foo. bar is ${_bar()}`;
}