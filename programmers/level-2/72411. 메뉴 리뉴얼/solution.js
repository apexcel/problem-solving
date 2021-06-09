// https://programmers.co.kr/learn/courses/30/lessons/72411
/**
 * 
 * @param {string[]} order 
 * @param {number[]} course 
 */
function solution(orders, course) {
    let total = new Map();

    const pick = (begin, order, len, temp) => {
        if (temp.length === len) {
            const rearrange = temp.slice(0).sort();
            const alpha = rearrange.join('');
            total.set(alpha, total.get(alpha) + 1 || 1);
            return;
        }

        for (let i = begin; i < order.length; i += 1) {
            temp.push(order[i]);
            pick(i + 1, order, len, temp);
            temp.pop(order[i]);
        }
    };

    const result = [];

    for (let i = 0; i < course.length; i += 1) {
        const len = course[i];
        let temp = [];
        total = new Map();

        for (let i = 0; i < orders.length; i += 1) {
            pick(0, orders[i], len, temp);
        }
        const totalArray = Array.from(total);
        const max = Math.max(...totalArray.map(pair => pair[1]));

        if (max > 1) {
            for (let i = 0; i < totalArray.length; i += 1) {
                if (totalArray[i][1] >= max) result.push(totalArray[i][0]);
            }
        }
    }
    return result.sort();
}

// solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]);
// solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]);
solution(["XYZ", "XWY", "WXA"], [2, 3, 4]);