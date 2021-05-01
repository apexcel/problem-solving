// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

function getTargetCopy(original, cloned, target) {
    return dfs(cloned, target);
};

function dfs(cloned, target) {
    if (cloned) {
        if (cloned.val === target.val) return cloned;
        return dfs(cloned.left, target) || dfs(cloned.right, target);
    }
    return null;
}

function bfs(original, cloned, target) {
    let q = [[original, cloned]];

    while (q.length) {
        const next = [];
        for (let [o, c] of q) {
            if (o.val === target.val) return c;
            if (o.left) next.push([o.left, c.left]);
            if (o.right) next.push([o.right, c.right]);
        }
        q = next;
    }
}