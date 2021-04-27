#include <iostream>
long long int fib(long long int cache[], int n) {
    if (cache[n]) return cache[n];
    else {
        cache[n] = fib(cache, n-1) + fib(cache, n-2);
        return cache[n];
    }
}

int main() {
    long long int cache[91] = {0, 1, 1}; int n;
    std::cin >> n;
    printf("%lld", fib(cache, n));
    return 0;
}