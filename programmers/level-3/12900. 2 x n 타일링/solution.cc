#include <string>
#include <vector>

using namespace std;

int solution(int n) {
    if (n < 3) return n;
    vector<int> vec = {1, 2};
    for (int i = 2; i < n; i += 1) {
        int t = vec[0];
        vec[0] = vec[1];
        vec[1] = (vec[0] + t) % 1000000007;
    }
    return vec[1];
}