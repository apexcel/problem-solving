#include <iostream>
#include <unordered_map>

using namespace std;

class Node {
    public:
        char parent, left, right;
        Node(): left('.'), right('.') {};
        Node(char l, char r): left(l), right(r) {};
};

int n;

void preorder(unordered_map<char, Node>& tree, char node) {
    if (node == '.') return;
    cout << node;
    if (tree[node].left) preorder(tree, tree[node].left);
    if (tree[node].right) preorder(tree, tree[node].right);
}

void inorder(unordered_map<char, Node>& tree, char node) {
    if (node == '.') return;
    if (tree[node].left) inorder(tree, tree[node].left);
    cout << node;
    if (tree[node].right) inorder(tree, tree[node].right);
}

void postorder(unordered_map<char, Node>& tree, char node) {
    if (node == '.') return;
    if (tree[node].left) postorder(tree, tree[node].left);
    if (tree[node].right) postorder(tree, tree[node].right);
    cout << node;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    cin >> n;
    unordered_map<char, Node> tree;
    while (n--) {
        char a, b, c;
        cin >> a >> b >> c;
        tree[a] = Node(b, c);
    }

    preorder(tree, 'A');
    cout << '\n';
    inorder(tree, 'A');
    cout << '\n';
    postorder(tree, 'A');

    return 0;
}