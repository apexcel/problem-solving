#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> res;

vector<int> slice(vector<int> vec, int begin, int end) {
    return vector<int>(vec.begin() + begin, vec.begin() + end);
}

void solution(vector<int> preorder, vector<int> inorder) {
    if (preorder.empty()) return;
    int root = preorder[0];
    int rootIndex = find(inorder.begin(), inorder.end(), root) - inorder.begin();

    vector<int> preLeft = slice(preorder, 1, rootIndex + 1),
                preRight = slice(preorder, rootIndex + 1, preorder.size()),
                inLeft = slice(inorder, 0, rootIndex),
                inRight = slice(inorder, rootIndex + 1, preorder.size());

    solution(preLeft, inLeft);
    solution(preRight, inRight);

    res.push_back(root);
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int tc;
    cin >> tc;
    while (tc--) {
        int n;
        cin >> n;
        res.clear();

        vector<int> preorder(n), inorder(n);
        for (int i = 0; i < n; i += 1) cin >> preorder[i];
        for (int i = 0; i < n; i += 1) cin >> inorder[i];
        
        solution(preorder, inorder);
        
        for (auto x: res) cout << x << ' ';
        cout << '\n';
    }

    return 0;
}