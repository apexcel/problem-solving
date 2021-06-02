// https://leetcode.com/problems/balance-a-binary-search-tree/
class TreeNode {
    constructor(val, left, right) {
        this.val = val ?? 0;
        this.left = left ?? null;
        this.right = right ?? null;
    }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function balanceBST(root) {
    const items = [];

    const inorderTraverse = (node) => {
        if (!node.val) return;
        items.push(node.val);
        if (node.left) inorderTraverse(node.left);
        if (node.right) inorderTraverse(node.right);
    };

    inorderTraverse(root);
    items.sort((a, b) => a - b);
    const makeBalanced = (begin, end) => {
        if (begin > end) return null;
        const mid = Math.floor((begin + end) / 2);
        const node = new TreeNode(items[mid]);
        node.left = makeBalanced(begin, mid - 1);
        node.right = makeBalanced(mid + 1, end);
        return node;
    };

    const resNode = makeBalanced(0, items.length - 1);
    return resNode;
};

const treenode = new TreeNode(1);
treenode.left = null;
treenode.right = new TreeNode(2);

balanceBST(treenode);