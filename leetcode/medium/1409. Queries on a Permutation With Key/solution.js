// https://leetcode.com/problems/queries-on-a-permutation-with-key/

/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
function processQueries(queries, m) {
    const permut = new Array(m).fill(0).map((_, i) => i + 1);
    const res = [];

    for (let i = 0; i < queries.length; i += 1) {
        const q = queries[i];
        const index = permut.findIndex(p => p === q);
        res.push(index);
        permut.unshift(...permut.splice(index, 1));
    }

    return res;
};

processQueries([3,1,2,1], 5)
processQueries([1], 5)