#include <stdio.h>

bool isPrime(int N) {
    if (N < 2) return false;
    for (int i = 2; i*i <= N; i += 1) {
        if (N % i == 0) {
            return false;
        }
    }
    return true;
}

int main() {
    int max, min, sum = 0, j = 0;
    int arr[10001];

    scanf("%d%d", &min, &max);

    for (int i = min; i <= max; i += 1) {
        if (isPrime(i)) {
            arr[j] = i;
            sum += i;
            j += 1;
        }
    }

    printf(sum ? "%d\n%d" : "-1", sum, arr[0]);
    return 0;
}