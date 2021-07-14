/**
 * https://programmers.co.kr/learn/courses/30/lessons/17683
 * @param {string} m 
 * @param {string[]} musicinfos 
 * @returns {string}
 */
function solution(m, musicinfos) {
    const possibles = [];
    const origin = replaceSharp(m);

    for (let i = 0; i < musicinfos.length; i += 1) {
        const [begin, end, title, note] = musicinfos[i].split(',');
        const playtime = minute(end) - minute(begin);
        const replaced = replaceSharp(note);
        let target = replaced;

        if (playtime > replaced.length) {
            for (let k = 0; target.length < playtime; k += 1) {
                target += target[k];
            }
        }
        else {
            target = replaced.slice(0, playtime);
        }

        if (target.includes(origin)) {
            possibles.push([title, playtime, i]);
        }
    }

    possibles.sort((a, b) => cmp(a, b));
    return possibles.length ? possibles[0][0] : '(None)';
}

function minute(formattedTime) {
    let [hh, mm] = formattedTime.split(':').map(v => parseInt(v, 10));
    if (hh === 0) hh = 24;
    return (hh * 60) + mm;
}

function replaceSharp(target) {
    return target.replace(/(\D)#/g, (match) => match[0].toLowerCase());
}

function cmp(a, b) {
    if (a[1] > b[1]) return -1;
    else if (a[1] < b[1]) return 1;
    else {
        if (a[2] > b[2]) return 1;
        else if (a[2] < b[2]) return -1;
        else return 0;
    }
}

solution('ABCDEFG', ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF", "12:00,12:10,HELLO,C#B#ABC"])
// solution('CC#BCC#BCC#BCC#B', ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B", "05:00,05:3,FOO3,CC#B"])
// solution('ABC', ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"])
// solution('ABC', ["12:00,12:4,HELLO,CAB", "13:00,13:04,WORLD,ABC", "13:00,13:4,FUCK,ABCA#"])