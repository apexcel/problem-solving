const sc = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(v => +v);
const [end, toPick] = sc;
let nums = [], isVisited = Array(end+1).fill(false);
const DFS = (begin, picked) => {
    if (toPick === picked) {
        let p = '';
        for (let i = 0; i < picked; i += 1) {
            p += `${nums[i]} `;
        }
        console.log(p);
        return;
    }
    for (let i = begin; i <= end; i += 1) {
        if (!isVisited[i]) {
            isVisited[i] = true;
            nums[picked] = i;
            DFS(i+1, picked+1);
            isVisited[i] = false;
        }
    }
};

DFS(1, 0);
/**
 * DFS를 이용한 조합 구하기
 */