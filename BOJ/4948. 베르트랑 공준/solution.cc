#include <iostream>
#include <cstring>

#define SIZE 246913

using namespace std;

int p[SIZE];

int getCount(int x) {
    int cnt = 0;
    for (int i = x + 1; i <= 2 * x; i += 1) {
        if (p[i] > 0) cnt += 1;
    }
    return cnt;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    memset(p, 1, sizeof(p));
    p[0] = p[1] = 0;
    for (int i = 2; i * i < SIZE; i += 1) {
        if (!p[i]) continue;
        for (int j = i + i; j < SIZE; j += i) p[j] = 0;
    }

    while (1) {
        int x;
        cin >> x;
        if (x == 0) return 0;
        cout << getCount(x) << '\n';
    }
}