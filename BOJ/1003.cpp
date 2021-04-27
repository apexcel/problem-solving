#include <iostream>
int cache[41] = {0, 1, 1, };
int fib(int k) {
    if (k == 0) return 0;
    if (k == 1 || k == 2) return 1;
    if (k > 2 && cache[k]) return cache[k];
    else {
        cache[k] = fib(k-2) + fib(k-1);
        return cache[k];
    }
}

int main() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(NULL);

    int n, m;
    fib(41);
    std::cin >> n;
    for (int i = 0; i < n; i++) {
        std::cin >> m;
        if (m == 0) std::cout << "1 0" << "\n";
        else if (m == 1) std::cout << "0 1" << "\n";
        else std::cout << cache[m-1] << " " << cache[m] << "\n";
    }
    
    return 0;
}