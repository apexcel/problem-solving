// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
#include <iostream>

/**
 * Definition for a binary tree node.
 */
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
public:
    TreeNode* getTargetCopy(TreeNode* original, TreeNode* cloned, TreeNode* target) {
        if (original == NULL) return NULL;
        if (original == target) return cloned;

        TreeNode* cp = getTargetCopy(original->left, cloned->left, target);
        if (cp != NULL && cp->val == target->val) return cp;

        TreeNode* cp2 = getTargetCopy(original->right, cloned->right, target);
        return cp2;
    }
};

int main() {
    return 0;
}