#include <stdio.h>
#include <algorithm>

int SIZE = 10000;
int d(int N) {
    return N + (N % 10000) / 1000 + (N % 1000) / 100 + (N % 100) / 10 + N % 10;
}

int main() {
    int arr[SIZE+1];
    std::fill_n(arr, SIZE+1, 1);
    for (int i = 0; i < SIZE; i++) {
        if (d(i) < SIZE) {
            arr[d(i)] = 0;
        }
    }
    for (int j = 0; j < SIZE; j++) {
        if (arr[j] != 0) {
            printf("%d\n", j);
        }
    }
}