#include <iostream>

using namespace std;

const int MAX_LEN = 50;

int main() {
    int t, a[MAX_LEN] = {0, }, b[MAX_LEN] = {0, };
    scanf("%d", &t);

    for (int i = 0; i < t; i += 1) {
        scanf("%d", a + i);
        for (int j = 0; j < i; j += 1) {
            a[j] > a[i] ? b[j]++ : b[i]++;
        }
    }

    for (int i = 0; i < t; i += 1) printf("%d ", b[i]);

    return 0;
}