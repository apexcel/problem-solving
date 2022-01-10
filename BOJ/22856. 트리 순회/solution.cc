#include <iostream>
#include <vector>
#include <map>

using namespace std;
// TODO: C++로 구현 하던 것 완성하기
class node {
    public:
    int left, right;
    node(): left(-1), right(-1) {};
    node(int l, int r): left(l), right(r) {};
};

int dfs() {

}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n;
    cin >> n;
    vector<node> tree(n);
    for (int i = 0; i < n; i += 1) {
        int a, b, c;
        cin >> a >> b >> c;
        tree[a] = node(b, c);
    }

    return 0;
}