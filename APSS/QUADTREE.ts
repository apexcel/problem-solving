const tc = {
    a: 'w',
    b: 'xbwwb',
    c: 'xbwxwbbwb',
    d: 'xxwwwbxwxwbbbwwxxxwwbbbwwwwbb'
};


const genMatrix = (s: string) => {
    const len = s.split('w').join('').split('b').map(v => v.length),
          size = Math.pow(2, Math.max(...len) + 1);
    return Array.from(Array(size), () => Array(size).fill(0))
};

const show = (s: string) => {
    const m = genMatrix(s);
    let index = -1;

    const decompress = (s: string, y: number, x: number, size: number) => {
        index++;
        if (s[index] === 'b' || s[index] === 'w') {
            for (let dy = 0; dy < size; dy++) {
                for (let dx = 0; dx < size; dx++) {
                    m[y + dy][x + dx] = s[index];
                }
            }
        }
        else {
            let half = Math.floor(size / 2);
            decompress(s, y, x, half);
            decompress(s, y, x + half, half);
            decompress(s, y + half, x, half);
            decompress(s, y + half, x + half, half);
        }
        return;
    };

    decompress(s, 0, 0, m.length);

    console.table(m)
};



const solution = (s: string) => {
    function* nextChar(str: string) {
        for (let s of str) {
            yield s;
        }
    }

    const char = nextChar(s);
    //let currentChar = char.next().value;
    //console.log(currentChar)

    const reverse = (char: Generator): string => {
        const current = char.next().value;
        if (current == 'b' || current == 'w') {
            return current;
        }
        const upperLeft = reverse(char);
        const upperRight = reverse(char);
        const lowerLeft = reverse(char);
        const lowerRight = reverse(char);
        
        return 'x' + lowerLeft + lowerRight + upperLeft + upperRight;
    };

    return reverse(char);
};

console.log(solution(tc.b))
console.log(solution(tc.c))
console.log(solution(tc.d))