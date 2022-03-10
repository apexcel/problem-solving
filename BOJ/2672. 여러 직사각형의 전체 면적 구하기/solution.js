const str = `52.7 22.9 27.3 13.3
68.8 57.6 23.2 8.0
20.0 48.0 37.0 23.5
41.5 36.2 27.3 21.4`.split('\n');
// TODO: 스위핑으로 풀기
const MAX_VAL = 987654321, MIN_VAL = -1

const parse = str => {
    const size = { mnx: MAX_VAL, mny: MAX_VAL, mxx: MIN_VAL, mxy: MIN_VAL };
    const coords = str.map(s => {
        const [x, y, w, h] = s.split(' ').map(v => Number(v) * 10);
        if (x < size.mnx) size.mnx = x;
        if (y < size.mny) size.mny = y;
        if (x + w > size.mxx) size.mxx = x + w;
        if (y + h > size.mxy) size.mxy = y + h;

        return [x, y, x + w, y + h];
    }).sort((a, b) => a[1] - b[1] || a[0] - b[0]);

    return {
        size,
        coords
    }
};

const { size, coords } = parse(str);
console.log(size, coords)
let cnt = 0;
for (let y = size.mny; y <= size.mxy; y += 1) {
    for (let x = size.mnx; x <= size.mxx; x += 1) {
        
        for (let i = 0; i < coords.length; i += 1) {
            const [x1, y1, x2, y2] = coords[i];
            if (y >= y1 && x >= x1 && y <= y2 && x <= x2) {
                cnt += 1;
                break;
            }
        }
    }
}
console.log(cnt)