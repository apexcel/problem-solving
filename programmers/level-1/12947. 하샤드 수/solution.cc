#include <string>
#include <vector>

using namespace std;

bool solution(int x) {
    int sum = 0, r = x;
    while (r > 0) {
        sum += r % 10;
        r = (int)(r / 10);
    }
    return x % sum == 0;
}