#include <vector>

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution {
public:
    vector<TreeNode*> sorted;
    TreeNode* balanceBST(TreeNode* root) {
        inorderTraverse(root);
        return vector2BST(0, sorted.size() - 1);
    }

    void inorderTraverse(TreeNode* root) {
        if (root == NULL) return;
        inorderTraverse(root->left);
        sorted.push_back(root);
        inorderTraverse(root->right);
    }

    TreeNode* vector2BST(int begin, int end) {
        if (begin > end) return NULL;
        int mid = (begin + end) / 2;
        TreeNode* root = sorted[mid];
        root->left = vector2BST(begin, mid - 1);
        root->right = vector2BST(mid + 1, end);
        return root;
    }
};

int main() {
    return 0;
}