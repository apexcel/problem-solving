#include <cstdio>
#include <algorithm>
int main() {
    int n, arr[11] = {0, }, i;
    scanf("%d", &n);

    for (i = 0; n > 0; i++) {
        arr[i] = n % 10;
        n = n / 10;
    }
    std::sort(arr, arr+i, [](int a, int b) -> bool {return a > b ? true : false;} );
    for (int j = 0; j < i; j++) {
        printf("%d", arr[j]);
    }
}