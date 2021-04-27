#include <cstdio>
#include <algorithm>

int main() {
    int n, i = 0;
    scanf("%d", &n);
    int num[n], k = n;
    while (n--) {
        scanf("%d", &num[i++]);
    }
    std::sort(num, num + k);
    for (int j = 0; j < k; j++) {
        printf("%d\n", num[j]);
    }
    return 0;
}