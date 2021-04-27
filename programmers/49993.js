// https://programmers.co.kr/learn/courses/30/lessons/49993

const solution = (skill, tree) => {
    const map = new Map();
    let failures = 0;

    for (const i in skill) {
        map.set(skill[i], i);
    }

    tree.map(v => {
        let count = 0;

        for (const s of v) {
            if (map.has(s)) {
                if (count < map.get(s)) {
                    failures += 1;
                    break;
                }
                else {
                    count += 1;
                }
            }
        }
    })    
    console.log(tree.length - failures);
    return tree.length - failures;
};

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])