# 1865. Finding Pairs With a Certain Sum

|출처|난이도|
|---|---|
|https://leetcode.com/problems/finding-pairs-with-a-certain-sum/|Medium|

## 풀이

해당 문제에서 `count` 메소드는 각 배열에서 수 하나씩을 뽑아 합산된 결과가 되는 쌍이 몇 개 있는 가를 반환한다. 
이에 제한 조건을 확인하면 첫 번째 배열 길이는 $10^3$ 두번 째 배열의 길이는 $10^5$이기 때문에 2중 반복문을 수행했을 때는 TLE가 발생한다.

```js
count(tot) {
    let count = 0;
    for (let i = 0; i < this.nums1.length; i += 1) {
        for (let j = 0; j < this.nums2.length; j += 1) {
            if (tot - this.nums1[i] === this.nums2[j]) count += 1;
        }
    }
    return count;
}
```

`nums2`배열에서 가져온 값과 `nums1`배열에서 가져온 값의 합이 되는 쌍을 찾는 것은 합산 결과에서 `nums1`에서 가져온 값을 뺀 값을 `nums2` 배열에서 찾는 것과 같다. 따라서 각 배열에서 해당하는 값 들의 개수를 서로 곱해주면 찾고자하는 모든 쌍을 찾을 수 있게 된다.

```js
class FindSumPairs {
    /**
    * @param {number[]} nums1
    * @param {number[]} nums2
    */
    constructor(nums1, nums2) {
        this.nums1 = nums1;
        this.nums2 = nums2;
        this.m1 = this.mapping(nums1);
        this.m2 = this.mapping(nums2);
    }

    /**
     * @param {number[]} arr 
     * @returns {map} map
     */
    mapping(arr) {
        const map = new Map();
        arr.forEach(val => map.set(val, map.get(val) + 1 || 1));
        return map;
    }

    /**
     * @param {number} index 
     * @param {number} val 
     * @return {void} void
     */
    add(index, val) {
        const prev = this.nums2[index];
        const current = this.nums2[index] + val;
        this.nums2[index] = current;

        const freq = this.m2.get(prev);
        freq > 1 ? this.m2.set(prev, freq - 1) : this.m2.delete(prev);

        this.m2.set(current, this.m2.get(current) + 1 || 1);
    };

    /**
     * @param {number} tot 
     * @returns {number} number
     */
    count(tot) {
        const keys = Array.from(this.m1.keys());
        let res = 0;
        for (const key of keys) {
            const diff = tot - key;
            if (this.m2.has(diff)) {
                res += this.m1.get(key) * this.m2.get(diff);
            }
        }
        return res;
    }
}
```
