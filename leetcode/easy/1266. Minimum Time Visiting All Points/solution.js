// https://leetcode.com/problems/minimum-time-visiting-all-points/submissions/
/**
 * @param {number[][]} points
 * @return {number}
 */
function minTimeToVisitAllPoints(points) {
    let res = 0;
    for (let i = 1; i < points.length; i += 1) {
        res += Math.max(Math.abs(points[i - 1][0] - points[i][0]), Math.abs(points[i - 1][1] - points[i][1]));
    }
    return res;
};

minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]])
minTimeToVisitAllPoints([[3, 2], [-2, 2]])