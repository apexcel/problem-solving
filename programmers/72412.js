// https://programmers.co.kr/learn/courses/30/lessons/72412


// 효율성 통과 못함

const table = {
    '-': 0,
    cpp: 1,
    java: 2,
    python: 3,
    backend: 1,
    frontend: 2,
    junior: 1,
    senior: 2,
    chicken: 1,
    pizza: 2
};

// const solution = (info, query) => {
//     const infos = info.map(v => {
//         let val = '';
//         let score = 0;
//         v.split(' ').forEach(e => isNaN(e) ? val += table[e] : score = e);
//         return [val, score];
//     }).sort((a, b) => b[1] - a[1]);

//     const queries = query.map(v => {
//         let val = '';
//         let score = 0;
//         v.split(' ').forEach(e => e !== 'and' && isNaN(e) ? val += table[e] : score = e);
//         return [val, score];
//     });

//     const ans = queries.map(q => {
//         const [stat, score] = q;
//         const filtered = infos.filter(info => +info[1] >= +score);
//         let sub = 0;
//         for (let i = 0; i < filtered.length; i += 1) {
//             const current = filtered[i][0];
//             for (let j = 0; j < stat.length; j += 1) {
//                 if (stat[j] == 0) continue;
//                 if (stat[j] != current[j]) {
//                     sub += 1;
//                     break;
//                 }
//             }
//         }
//         return filtered.length - sub;
//     });

//     console.log(ans)
// };


const lowerBound = (values, score) => {
    let start = 0;
    let end = values.length;
    let mid;

    while (start < end) {
        mid = start + Math.floor((end - start) / 2);
        score <= values[mid] ? end = mid : start = mid + 1;
    }
    return start;
};

const solution = (infos, queries) => {
    const obj = {};
    const result = [];

    const parse = (stat, score, next) => {
        // let str = '';
        // for (let i = 0; i < stat.length; i += 1) {
        //     str += table[stat[i]];
        // }
        const str = stat.join('');
        obj[str] ? obj[str].push(score) : obj[str] = [score];

        for (let i = next; i < stat.length; i += 1) {
            const copy = stat.slice(0);
            copy[i] = '-';
            parse(copy, score, i + 1);
        }
    };

    for (let i = 0; i < infos.length; i += 1) {
        const splited = infos[i].split(' ');
        const score = parseInt(splited.pop(), 10);
        parse(splited, score, 0);
    }

    for (const prop in obj) {
        obj[prop].sort((a, b) => a - b);
    }

    for (let i = 0; i < queries.length; i += 1) {
        const query = queries[i].split(' ');
        const score = parseInt(query.pop(), 10);
        let qs = '';

        for (let j = 0; j < query.length; j += 1) {
            if (query[j] === 'and') continue;
            qs += query[j];
        }
        obj[qs] ? result.push(obj[qs].length - lowerBound(obj[qs], score)) : result.push(0);
    }
    return result;
};

solution(["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"],
    ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"])