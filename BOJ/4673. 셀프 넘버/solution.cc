#include <iostream>

using namespace std;

int is_self_num[10001] = {0};

int d(int n) {
    int quot = n, res = n;
    while (quot > 0) {
        res += quot % 10;
        quot /= 10;
    }
    return res;
}

int main() {
    for (int i = 1; i < 10001; i += 1) {
        is_self_num[d(i)] = 1;
    }

    for (int i = 1; i < 10001; i += 1) {
        if (is_self_num[i] == 0) {
            cout << i << '\n';
        }
    }

    return 0;
}