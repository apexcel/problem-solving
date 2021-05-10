// https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumEvenGrandparent(root) {
    let sum = 0;
    const dfs = (node) => {
        if (!node) return;
        if ((node.left.left || node.right.right) && node.val % 2 === 0) {
            sum += node.val
        }
        return dfs(node.left) || dfs(node.right);
    };

    dfs(root);
    return sum;
};