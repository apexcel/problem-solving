#include <stdio.h>
#include <stdlib.h>

bool isPrime(int num) {
    if (num < 2) {
        return false;
    }
    if (num == 2) {
        return true;
    }
    for (int i = 2; i < num; i += 1) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

int main() {
    int tc, nums[100], counter = 0;;
    scanf("%d", &tc);

    for (int i = 0; i < tc; i += 1) {
        scanf("%d", &nums[i]);
        if (isPrime(nums[i])) {
            counter += 1;
        }
    }

    printf("%d", counter);
}