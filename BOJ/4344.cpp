#include <stdio.h>

int main() {
    int tc, n[1001];
    scanf("%d", &tc);

    while (tc--) {
        int c = 0, avg = 0, sum = 0, cnt = 0;
        scanf("%d", &c);
        for (int i = 0; i < c; i++) {
            scanf("%d", &n[i]);
            sum += n[i];
        }
        avg = sum / c;
        for (int j = 0; j < c; j++) {
            if (n[j] > avg) cnt++;
        }
    printf("%.3f%%\n", (float)cnt / c * 100);
    }
}