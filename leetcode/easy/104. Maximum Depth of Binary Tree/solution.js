// https://leetcode.com/problems/maximum-depth-of-binary-tree/
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
 function maxDepth(root) {
    let d = 0;
    const dfs = (node, depth) => {
        if (node === null) {
            d = Math.max(d, depth);
            return;
        }
        depth += 1;
        dfs(node.left, depth);
        dfs(node.right, depth);
    }

    dfs(root, 0);
    return d;
};