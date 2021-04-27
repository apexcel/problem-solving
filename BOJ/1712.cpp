#include <iostream>

int main() {
    int a = 0, b = 0, c = 0, t = 1;
    std::cin >> a >> b >> c;
    if (b >= c) std::cout << -1;
    else std::cout << t + a / (c-b);
    return 0;
}