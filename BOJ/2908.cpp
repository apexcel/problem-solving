#include <cstdio>

int f(int N) {
    int a = N / 100;
    int b = N % 100 / 10;
    int c = N % 10;
    return c * 100 + b * 10 + a;
}

int main() {
    int m, n;
    scanf("%d %d", &m, &n);
    printf("%d", f(m) > f(n) ? f(m) : f(n));
}