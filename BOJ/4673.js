function d(n) {
    return n + parseInt((n % 10000) / 1000) + parseInt((n % 1000) / 100) + parseInt((n % 100) / 10) + parseInt((n % 10));
}
let arr = [];
for (let i = 0; i < 10000; i++) {
    arr[i] = i;
}
for (let j = 0; j < arr.length; j += 1) {
    if (d(j) < arr.length) arr[d(j)] = 0;
}
arr.forEach(el => el !== 0 ? console.log(el) : null);