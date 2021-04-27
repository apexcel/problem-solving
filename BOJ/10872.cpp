#include <cstdio>
int fac(int n) {
    if (n == 0) return 1;
    return n * fac(n-1);
}

int main() {
    int tc;
    scanf("%d", &tc);
    printf("%d", fac(tc));
    return 0;
}