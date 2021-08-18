/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
    const temp = [], res = [];
    let sum = 0;
    const pick = (index) => {
        if (sum >= target) {
            if (sum === target) res.push(temp.slice());
            return;
        }
        for (let i = index; i < candidates.length; i += 1) {
            temp.push(candidates[i])
            sum += candidates[i];
            pick(i);
            sum -= candidates[i];
            temp.pop();
        }
    }
    pick(0);

    return res;
};