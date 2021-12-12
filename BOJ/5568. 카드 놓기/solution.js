const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const k = +input[1];
const isVisited = Array(input[0]).fill(0);
const nums = input.slice(2);

const set = new Set();
let temp = [];
function dfs(depth) {
    if (depth === k) {
        set.add(temp.join(''));
        return;
    }
    
    for (let i = 0; i < nums.length; i += 1) {
        if (!isVisited[i]) {
            isVisited[i] = 1;
            temp.push(nums[i]);
            dfs(depth + 1);
            temp.pop();
            isVisited[i] = 0;
        }
    }
}
dfs(0);
console.log(set.size);