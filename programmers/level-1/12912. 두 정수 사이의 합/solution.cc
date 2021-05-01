#include <iostream>
#include <string>
#include <vector>

using namespace std;

long long solution(int a, int b) {
    return (long long)(a + b) * (abs(b - a) + 1) / 2;
}

int main() {
    cout << solution(3, 5);
    return 0;
}