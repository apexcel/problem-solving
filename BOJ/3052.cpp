#include <iostream>

int main() {
    int i, val, cnt = 0, arr[42] = {0, };
    for (i = 0; i < 10; i++) {
        std::cin >> val;
        arr[val % 42]++;
    }
    for (i = 0; i < 42; i++) {
        if (arr[i] != 0) {
            cnt++;
        }
    }
    std::cout << cnt;
    return 0;
}