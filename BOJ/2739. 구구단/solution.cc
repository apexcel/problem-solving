#include<iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int n;
    cin >> n;

    for (int i = 1; i <= 9; i += 1) {
        printf("%d * %d = %d\n", n, i, n * i);
    }
    return 0;
}