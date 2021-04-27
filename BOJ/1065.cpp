#include <stdio.h>

int h(int N) {
    if (N < 100) return N;
    int cnt = 0;
    for (int i = 100; i <= N; ++i) {
        if ((i % 10) - (i % 100 / 10) == (i % 100 / 10) - i / 100){
            cnt++;
        }
    }
    return 99 + cnt;
}

int main() {
    int a;
    scanf("%d", &a);
    printf("%d", h(a));
}