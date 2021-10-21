/**
 * @param {number} number 
 * @param {string} matches 
 * @param {number[]} weights 
 * @returns 
 */
function getMatchResult(number, matches, weights) {
    const currentWeight = weights[number];
    let vsGigantic = 0;
    let rounds = 0;

    const matchResult = matches.split('').reduce((acc, cur, idx) => {
        rounds += 1;
        if (cur === 'W') {
            if (currentWeight < weights[idx]) {
                vsGigantic += 1;
            }
            acc += 1;
        }
        if (cur === 'N') rounds -= 1;
        return acc;
    }, 0);

    const winRate = rounds > 0 ? matchResult / rounds : 0;

    return{
        weight: currentWeight,
        number: number + 1,
        winRate,
        vsGigantic
    }
}


/**
 * @param {number[]} weights 
 * @param {string[]} head2head 
 * @returns 
 */
function solution(weights, head2head) {
    const res = head2head.map((matches, i) => getMatchResult(i, matches, weights));

    res.sort((a, b) => 
        b.winRate - a.winRate ||
        b.vsGigantic - a.vsGigantic ||
        b.weight - a.weight ||
        a.number - b.number
    );

    return res.map(v => v.number);
}