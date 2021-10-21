/**
 * @param {string} word 
 * @returns 
 */
function solution(word) {
    const vowels = 'AEIOU';
    let set = new Set([...vowels]);

    for (let i = 0; i < 4; i += 1) {
        const temp = new Set(set);
        for (let vowel of vowels) {
            set.forEach(s => temp.add(s + vowel));
        }
        set = temp;
    }
    console.log(Array.from(set).sort())

    return Array.from(set).sort().findIndex(v => word === v) + 1;
}

console.log(solution('AAEAA'))
console.log(solution('AAIAA'))