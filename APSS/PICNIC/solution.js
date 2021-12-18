const input = `3
2 1
0 1
4 6
0 1 1 2 2 3 3 0 0 2 1 3
6 10
0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5`.split('\n');

const areFriends = Array.from(Array(10), () => Array(10).fill(0));
const fff = `0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5`.split(' ');
for (let i = 0; i < fff.length; i += 2) {
    const a = fff[i], b = fff[i+1];
    areFriends[a][b] = 1;
    areFriends[b][a] = 1;
}


function solution() {
    const pairArr = Array(6).fill(0);
    let cnt = 0;

    const check = () => {
        const firstIdx = pairArr.findIndex(v => !v);
        console.log(pairArr)
        if (firstIdx < 0) return cnt += 1;

        for (let i = firstIdx; i < 6; i += 1) {
            if (!pairArr[i] && !pairArr[firstIdx] && areFriends[i][firstIdx]) {
                pairArr[i] = pairArr[firstIdx] = 1;
                check();
                pairArr[i] = pairArr[firstIdx] = 0;
            }
        }
    }
    check()
    console.log(cnt)
}
solution()