#include <stdio.h>
bool isPrime(int N) {
    if (N < 2) return false;
    for (int i = 2; i*i <= N; i += 1) {
        if (N % i == 0) return false;
    }
    return true;
}
int main() {
    int n, m;
    scanf("%d %d", &n, &m);
    for (int i = n; i <= m; i += 1) {
        if (isPrime(i)) printf("%d\n", i);
    }
}