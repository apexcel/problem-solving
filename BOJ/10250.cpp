#include <iostream>
#include <string>

void my_solution(int h, int w, int n) {
    int cnt = 1;
    for (int i = 0; i < h*w; ++i) {
        if (n > h) {
            n -= h;
            cnt++;
        }
    }
    printf("%d%02d\n", n, cnt);
}

void other_solution(int h, int w, int n) {
    printf("%d%02d\n", (n-1)%h+1, (n-1)/h+1);
}

int main() {
    int t, h, w, n;
    scanf("%d", &t);
    while (t--) {
        scanf("%d %d %d", &h, &w, &n);
        other_solution(h, w, n);
    }
    return 0;
}