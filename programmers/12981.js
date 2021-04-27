// https://programmers.co.kr/learn/courses/30/lessons/12981

const solution = (n, words) => {
    let store = [words[0]];

    for (let i = 1; i <= words.length - 1; i += 1) {
        const prev = words[i-1].substring(words[i-1].length - 1, words[i-1].length);
        const current = words[i].substring(0, 1);


        if (prev === current) {
            if (!store.includes(words[i])) {
                store.push(words[i]);
            }
            else {
                return [(i+1) % n ? (i+1) % n : n, Math.ceil((i + 1) / n)];
            }
        }
        else {
            return [(i+1) % n ? (i+1) % n : n, Math.ceil((i + 1) / n)]
        }
    }
    return [0, 0];
};

solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])
solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])
solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
solution(2, ["land", "dream", "mom", "mom", "ror"])