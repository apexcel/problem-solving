// https://programmers.co.kr/learn/courses/30/lessons/42578

const solution = clothes => {
    const m = new Map();
    let ret = 1;
    clothes.forEach(v => {
        const val = m.get(v[1]);
        val ? m.set(v[1], val + 1) : m.set(v[1], 1);
    });

    for (let c of m) {
        ret *= c[1] + 1;
    }
    return (ret - 1);
}

solution([['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']])