/**
 * https://programmers.co.kr/learn/courses/30/lessons/77486
 * @param {string[]} enroll 
 * @param {string[]} referral 
 * @param {string[]} seller 
 * @param {number[]} amount 
 * @returns {number[]}
 */
function solution(enroll, referral, seller, amount) {
    const parents = new Map();
    const res = new Map();

    enroll.forEach((name, i) => {
        parents.set(name, referral[i]);
        res.set(name, 0);
    });

    for (let i = 0; i < seller.length; i += 1) {
        let earning = amount[i] * 100,
            child = seller[i],
            parent = parents.get(child);

        while (child !== '-') {
            let parentValue = Math.floor(earning * 0.1), childValue = earning - parentValue;
            res.set(child, res.get(child) + childValue);

            earning = parentValue;
            child = parent;
            parent = parents.get(child);
            
            if (earning < 1) break;
        }
    }

    return enroll.map(name => res.get(name));
}