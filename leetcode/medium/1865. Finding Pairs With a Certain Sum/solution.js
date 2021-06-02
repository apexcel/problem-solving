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