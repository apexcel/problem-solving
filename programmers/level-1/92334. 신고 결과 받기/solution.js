function solution(id_list, report, k) {
    const map = new Map();
    const pairs = report.map(r => r.split(' '));

    pairs.forEach(([reporter, reported]) => {
        if (map.has(reported)) {
            const val = map.get(reported);
            if (!val.list.includes(reporter)) {
                val.list.push(reporter);
                val.acc += 1;
            }
        }
        else {
            map.set(reported, { list: [reporter], acc: 1 });
        }
    });

    const obj = {};
    map.forEach(val => {
        if (val.acc >= k) val.list.forEach(v => obj[v] = obj[v] ? obj[v] + 1 : 1);
    })

    return id_list.map(id => obj[id] ? obj[id] : 0);
}

solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2)

solution(
    ["con", "ryan"],
    ["ryan con", "ryan con", "ryan con", "ryan con"],
    3)
