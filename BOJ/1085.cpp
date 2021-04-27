#include <cstdio>

int min(int a, int b) {
    return a > b ? b : a;
}

int main() {
    int x, y, w, h;
    scanf("%d %d %d %d", &x, &y, &w, &h);
    printf("%d", min(min(min(w-x, h-y), x), y));
    return 0;
}