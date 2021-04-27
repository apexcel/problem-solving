#include <iostream>

int main() {
    int n, cnt = 0;
    scanf("%d", &n);
    for (;n > 0 && n % 5; n -= 3, cnt++);
    printf("%d", n < 0 ? -1 : n / 5 + cnt);
    return 0;
}