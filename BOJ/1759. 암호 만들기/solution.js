const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [l, c] = input[0].split(' ');
const alphabets = input[1].split(' ').sort();

const isVowel = ch => 'aeiou'.includes(ch);

const solution = () => {
    const res = [], temp = [];
    let vowels = 0, consonants = 0;

    const pick = (begin, picked) => {
        if (picked === +l) {
            if (vowels >= 1 && consonants >= 2) res.push(temp.join(''));
            return;
        }

        for (let i = begin; i < +c; i += 1) {
            isVowel(alphabets[i]) ? vowels += 1 : consonants += 1;
            temp.push(alphabets[i]);
            pick(i + 1, picked + 1);
            isVowel(temp.pop()) ? vowels -= 1 : consonants -= 1;
        }
    };

    pick(0, 0);
    console.log(res.join('\n'));
};

solution();