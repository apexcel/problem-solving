// https://leetcode.com/problems/count-of-matches-in-tournament/

/**
 * @param {number} n
 * @return {number}
 */
function numberOfMatches(n) {
    let teams = n, matches = 0;
    while (teams >= 2) {
        matches += Math.floor(teams / 2);
        teams = teams - Math.floor(teams / 2);
    }
    console.log(matches);
    return matches;
};