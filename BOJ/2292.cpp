#include <iostream>

int main() {
    int target;
    int i = 1, end = 1;
    scanf("%d", &target);
    for (i; i <= target; ++i) {
        if (target <= end) break;
        end += 6 * i;
    }
    printf("%d", i);
    return 0;
}