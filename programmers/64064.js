// https://programmers.co.kr/learn/courses/30/lessons/64064

let res = new Set();

const solution = (user_id, banned_id) => {
    const mapped = banned_id.map(v => {
        return user_id.reduce((acc, e) => {
            if (isMatch(e, v)) {
                acc.push(e);
            }
            return acc;
        }, [])
    });

    dfs(mapped, 0, new Set())
    return res.size;
};

const dfs = (mapped, index, set) => {
    if (index === mapped.length) {
        res.add([...set].sort().join(''));
        return
    }
    for (const item of mapped[index]) {
        const next = new Set([...set, item]);
        if (next.size !== set.size) {
            dfs(mapped, index+1, next)
        }
    }
};

const isMatch = (user, banned) => {
    if (user.length !== banned.length) {
        return false;
    }
    for (const i in user) {
        if (banned[i] !== '*' && user[i] !== banned[i]) {
            return false;
        }
    }
    return true;
};

const tc = [
    [["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"]],
    [["frodo", "fradi", "crodo", "abc123", "frodoc"], ["*rodo", "*rodo", "******"]],
    [["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"]]
];

tc.forEach(v => {
    console.log(solution(v[0], v[1]));
})