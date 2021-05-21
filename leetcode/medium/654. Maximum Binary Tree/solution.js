// https://leetcode.com/problems/maximum-binary-tree/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function constructMaximumBinaryTree(nums) {
    const makeTree = (nums, root) => {
        const maxIndex = nums.findIndex(num => Math.max(...nums) === num);
        const left = nums.slice(0, maxIndex), right = nums.slice(maxIndex + 1);

        if (!root) {
            root = new TreeNode(nums[maxIndex]);
        }
        if (left.length) {
            root.left = makeTree(left, root.left);
        }
        if (right.length) {
            root.right = makeTree(right, root.right);
        }

        return root;
    };

    return makeTree(nums);
};

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));