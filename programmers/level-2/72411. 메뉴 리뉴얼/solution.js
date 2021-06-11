// https://programmers.co.kr/learn/courses/30/lessons/72411
/**
 * 
 * @param {string[]} order 
 * @param {number[]} course 
 */
function solution(orders, course) {
    const result = [];
    let total = new Map();

    const pick = (begin, order, len, temp) => {
        if (temp.length === len) {
            const alpha = temp.slice(0).sort().join('');
            total.set(alpha, total.get(alpha) + 1 || 1);
            return;
        }

        for (let i = begin; i < order.length; i += 1) {
            temp.push(order[i]);
            pick(i + 1, order, len, temp);
            temp.pop(order[i]);
        }
    };


    for (let i = 0; i < course.length; i += 1) {
        const len = course[i];
        let max = 2, temp = [];
        total = new Map();

        for (let i = 0; i < orders.length; i += 1) {
            pick(0, orders[i], len, temp);
        }
        
        let strings = [];
        for (const [alpha, count] of Array.from(total)) {
            if (count < max) continue;
            if (count > max) {
                max = count;
                strings = [alpha];
            }
            else if (count === max) strings.push(alpha);
        }
        result.push(...strings);
    }
    console.log(result.sort())
    return result.sort();
}

// solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]);
// solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]);
// solution(["XYZ", "XWY", "WXA"], [2, 3, 4]);
solution(['ABCF', 'ABE', 'CDF', 'ACEF'], [2]);