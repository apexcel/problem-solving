#include <stdio.h>

int main() {
    int tc, n, m=0, sum=0;
    double avg;
    scanf("%d", &tc);
    for (int i = 0; i < tc; i++) {
        scanf("%d", &n);
        if (n > m) m = n;
        sum += n;
    }
    printf("%lf", (sum * 100.0 / m / tc));
}