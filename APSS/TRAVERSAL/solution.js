const res = [];
const solution = (preorder, inorder) => {
    if (!preorder.length) return;
    const root = preorder[0];
    const rootIndex = inorder.findIndex(node => node === root);

    const preorderLeftSubTree = preorder.slice(1, rootIndex + 1)
        , preorderRightSubTree = preorder.slice(rootIndex + 1)
        , inorderLeftSubTree = inorder.slice(0, rootIndex)
        , inorderRightSubTree = inorder.slice(rootIndex + 1);
    
    solution(preorderLeftSubTree, inorderLeftSubTree);
    solution(preorderRightSubTree, inorderRightSubTree);

    res.push(root);
}

solution(['27', '16', '9', '12', '54', '36', '72'], ['9', '12', '16', '27', '36', '54', '72'])
console.log(res.join(' '));