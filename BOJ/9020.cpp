#include <cstdio>

#define SIZE 10000
bool num[SIZE] = {0, };

void sieve(bool num[]) {
    for (int i = 2; i*i <= SIZE; i += 1) {
        for (int j = i*i; j <= SIZE; j += i) {
            if (!num[j]) {
                num[j] = true;
            }
        }
    }
}

int main() {
    int tc, n;
    sieve(num);
    scanf("%d", &tc);
    while(tc--) {
        scanf("%d", &n);
        for (int j = n/2; j >= 2; j -= 1) {
            if (!num[j] && !num[n - j]) {
                printf("%d %d\n", j, n-j);
                break;
            }
        }
    }
    return 0;
}