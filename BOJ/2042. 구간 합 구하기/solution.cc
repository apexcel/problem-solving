#include <iostream>

#define MAX 1000001

using namespace std;

typedef long long ll;

ll tree[MAX], nums[MAX];

int n, m, k, a;
ll b, c;

void update(int pos, ll val) {
    while (pos <= n) {
        tree[pos] += val;
        pos += (pos & -pos);
    }
}

ll sum(int pos) {
    ll ret = 0;
    while (pos > 0) {
        ret += tree[pos];
        pos -= (pos & -pos);
    }
    return ret;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    cin >> n >> m >> k;
    for (int i = 1; i <= n; i += 1) {
        cin >> nums[i];
        update(i, nums[i]);
    }

    for (int i = 0; i < m + k; i += 1) {
        cin >> a >> b >> c;
        if (a == 1) {
            ll d = c - nums[b];
            nums[b] = c;
            update(b, d);
        }
        else {
            cout << sum(c) - sum(b - 1) << '\n';
        }
    }

    return 0;
}