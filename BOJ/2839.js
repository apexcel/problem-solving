let sc = Number(require('fs').readFileSync('/dev/stdin').toString());
let cnt = 0;
for (;sc % 5; sc -= 3) {
    if (sc < 0) break;
    cnt += 1;
}
console.log(sc < 0 ? -1 : cnt + sc / 5);