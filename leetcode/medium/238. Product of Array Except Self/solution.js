/** https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
    const product1 = [1];
    for (let i = 1; i < nums.length; i += 1) {
        product1[i] = product1[i - 1] * nums[i - 1]
    }

    const product2 = [];
    product2[nums.length - 1] = 1;
    for (let i = nums.length - 2; i >= 0; i -= 1) {
        product2[i] = product2[i + 1] * nums[i + 1];
    }

    return product1.map((v, i) => product2[i] * v);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf2(nums) {
    let product = 1, zeroCount = 0;
    nums.forEach(n => n ? product *= n : zeroCount += 1);

    return nums.map(n => {
        if (zeroCount === 1 && n === 0) return product;
        else if (zeroCount > 0) return 0;
        return product / n;
    })
}

console.log(productExceptSelf2([-1, 1, 0, -3, 3]))
console.log(productExceptSelf2([1, 2, 3, 4]))