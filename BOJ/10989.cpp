#include <cstdio>
#include <algorithm>

int main() {
    int n, m, cnt[10001] = {0, }, i = 0;
    scanf("%d", &n);

    while (n--) {
        scanf("%d", &m);
        cnt[m]++;
    }

    for (int j = 0; j < 10001; j++) {
        if (cnt[j] == 0) continue;
        for (int l = 0; l < cnt[j]; l++) {
            printf("%d\n", j);
        }
    }
    return 0;
}