#include <string>
#include <vector>

using namespace std;

int gcd(int x, int y) {
    return x % y ? gcd(y, x % y) : y;
}

int lcm(int x, int y) {
    return x * y / gcd(x, y);
}

vector<int> solution(int n, int m) {
    vector<int> answer = { gcd(n, m), lcm(n, m) };
    return answer;
}