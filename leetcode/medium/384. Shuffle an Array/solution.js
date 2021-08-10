class Solution {
    /**
     * @param {number[]} nums 
     */
    constructor(nums) {
        this.origin = nums;
    }

    /**
     * @returns {number[]}
     */
    reset() {
        return this.origin;
    }

    /**
     * @returns {number[]}
     */
    shuffle() {
        const shuffled = [];
        const indices = new Array(this.origin.length).fill(1);

        while (shuffled.length < this.origin.length) {
            const i = Math.floor(Math.random() * this.origin.length);
            if (indices[i]) {
                console.log(i, indices[i])
                shuffled.push(this.origin[i]);
                indices[i] = 0;
            }
        }

        return shuffled;
    }
}