// https://programmers.co.kr/learn/courses/30/lessons/43163
/**
 * DFS
 * @param {string} begin 
 * @param {string} target 
 * @param {number[]} words 
 * @returns 
 */
function solution(begin, target, words) {
    const isVisited = new Array(words.length).fill(false);
    let res = 999;

    const dfs = (current, depth) => {
        console.log(current, depth)
        if (current === target) {
            res = Math.min(res, depth);
            return;
        }

        for (let i = 0; i < words.length; i += 1) {
            if (!isVisited[i]) {
                isVisited[i] = true;
                if (distinguish(current, words[i])) {
                    dfs(words[i], depth + 1);
                }
                isVisited[i] = false;
            }
        }
    }

    dfs(begin, 0)
    console.log(res)
    return res;
}

function distinguish(current, target) {
    let diff = 0;
    for (let i = 0; i < current.length; i += 1) {
        if (current[i] !== target[i]) {
            diff += 1;
        }
    }
    return diff === 1;
}

/**
 * BFS
 * @param {string} begin 
 * @param {string} target 
 * @param {number[]} words 
 * @returns 
 */
function solution2(begin, target, words) {
    const isVisited = new Array(words.length).fill(false);
    const q = [[begin, 0]];

    const bfs = () => {
        while (q.length > 0) {
            const [current, depth] = q.shift();

            if (current === target) {
                return depth;
            }

            for (let i = 0; i < words.length; i += 1) {
                if (distinguish(current, words[i]) && !isVisited[i]) {
                    isVisited[i] = true;
                    q.push([words[i], depth + 1]);
                }
            }
        }
        return 0;
    };

    return bfs();
};

solution2('hit', 'cog', ["hot", "dot", "dog", "lot", "log", "cog"])
solution2('hit', 'cog', ["hot", "cot", "cog"])
solution2('hit', 'cog', ["hot", "dot", "dog", "lot", "log"])