#include <cstdio>
#include <cmath>
int main() {
    int n, k, len = 0;
    scanf("%d", &n);
    k = n;
    
    for (int i = n - 63; i < n; i++) {
        int rem = i;
        int sum = i;

        while (rem > 0) {
            sum += rem % 10;
            rem /= 10;
        }

        if (sum == n) {
            printf("%d", i);
            break;
        }
        if (i + 1 == n) {
            printf("0");
        }
    }
    
    return 0;
}