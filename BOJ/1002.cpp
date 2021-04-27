#include <cstdio>
#include <cmath>

int main() {
    int x1, x2, y1, y2, r1, r2, tc, cnt = 0;
    scanf("%d", &tc);
    while (tc--) {
        scanf("%d %d %d %d %d %d", &x1, &y1, &r1, &x2, &y2, & r2);
        int s = pow(x1 - x2, 2) + pow(y1 - y2, 2);
        int posR = pow(r1 + r2, 2);
        int negR = pow(r1 - r2, 2);

        if (s < negR || s > posR) cnt = 0;
        else if (s != 0 && (s == negR || s == posR)) cnt = 1;
        else if (s > negR && s < posR) cnt = 2;
        else cnt = -1;
        printf("%d\n", cnt);
    }
    return 0;
}