#include <iostream>

using namespace std;

int solution(long long begin, long long end) {
    long long sieve[end - begin + 1] = {0};
    int res = 0;

    for (long long i = 2; i * i <= end; i += 1) {
        long long x = begin / (i * i);
        if (begin % (i * i)) x += 1;

        for (long long y = x * i * i; y <= end; y = (x += 1) * i * i) {
            sieve[y - begin] = 1;
        }
    }

    for (auto x: sieve) if (!x) res += 1;

    return res;
}

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    long long b, e;
    cin >> b >> e;

    cout << solution(b, e);
    return 0;
}