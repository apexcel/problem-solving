#include <cstdio>

int main() {
    int n, m, sum;
    scanf("%d %d", &n, &m);
    int k[n];

    for (int i = 0; i < n; i++) {
        scanf("%d", &k[i]);
    }
    int max = 0;
    for (int i = 0; i < n; i++) {
        for (int j = i+1; j < n; j++) {
            for (int l = j+1; l < n; l++) {
                sum = k[i] + k[j] + k[l];
                if (m >= sum && max < sum) {
                    max = sum;
                }
            }
        }
    }
    printf("%d", max);
    return 0;
}