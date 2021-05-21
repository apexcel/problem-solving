// https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
function busyStudent(startTime, endTime, queryTime) {
    return startTime.reduce((acc, _, i) => startTime[i] <= queryTime &&  endTime[i] >= queryTime ? acc + 1 : acc, 0);
};

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4))
console.log(busyStudent([4], [4], 4))
console.log(busyStudent([4], [4], 5))
console.log(busyStudent([1, 1, 1, 1], [1, 3, 2, 4], 7))