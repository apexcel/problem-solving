// https://programmers.co.kr/learn/courses/30/lessons/42888

const solution = record => {
    const logs = record.map(v => v.split(' '));
    const map = new Map();
    let list = [], refined = [];
    logs.forEach(v => {
        if (v[0] !== 'Leave') {
            map.set(v[1], v[2])
        }
        if (v[0] === 'Enter' || v[0] === 'Leave') {
            list.push([v[0], v[1]]);
        }
    });

    list.forEach(v => refined.push(printMessage(v[0], map.get(v[1]))));
    console.log(refined)
    return refined;
};

const printMessage = (feature, nickname) => {
    feature = feature === 'Enter' ? `들어왔습` : `나갔습`;
    return `${nickname}님이 ${feature}니다.`
};

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"])