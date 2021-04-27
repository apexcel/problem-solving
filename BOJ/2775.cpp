#include <iostream>

int getNum(int a, int b) {
    if (b == 1) return 1;
    if (a == 0) return b;
    return (getNum(a - 1, b) + getNum(a, b -1));
}

int main() {
    int A, B, t, ans;
    scanf("%d", &t);
    while (t--) {
        scanf("%d\n%d", &A, &B);
        ans = getNum(A, B);
        printf("%d\n", ans);
    }
}