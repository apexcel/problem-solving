#include <cstdio>

using namespace std;

int main() {
    int tc;
    scanf("%d", &tc);
    for (int i = 1; i <= tc; i += 1) {
        int x, y;
        scanf("%d %d", &x, &y);
        printf("Case #%d: %d\n", i, x + y);
    }
}