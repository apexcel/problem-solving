// https://programmers.co.kr/learn/courses/30/lessons/42860

/**
 * 다른 사람의 풀이
 */
// TODO: 직접 다시 풀어보기
function solution(name) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        let diff = name[i].charCodeAt() - 'A'.charCodeAt();
        sum += diff > 13 ? 26 - diff : diff;
    }

    let minMove = name.length - 1;
    for (let i = 1; i < name.length; i++) {
        if (name[i] === 'A') {
            for (var j = i + 1; j < name.length; j++) {
                if (name[j] !== 'A') {
                    break;
                }
            }

            const left = i - 1;
            const right = name.length - j;
            minMove = Math.min(minMove, left > right ? left + right * 2 : left * 2 + right);

            i = j;
        }
    }

    return sum + minMove;
}

// solution("JEROEN")
solution("JAN")
solution("JAZ")
// solution("ZAAAAZA")
// solution("BAAAAAAAZ")
// solution("AAA")
// solution("ZXC")
// solution("AZA")
// solution("ZAZ")
// solution("ABAAAAABAB")