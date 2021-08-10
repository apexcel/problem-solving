/** https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    const map = new Map();
    const sorted = strs.map((str, i) => [str.split('').sort().join(''), i]);

    sorted.forEach(s => {
        const [val, index] = s;
        map.has(val)
            ? map.set(val, [...map.get(val), strs[index]])
            : map.set(val, [strs[index]]);
    });

    return Array.from(map).map(v => v[1]);
};


groupAnagrams(["", ""])
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])