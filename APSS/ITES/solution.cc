#include <iostream>
#include <queue>

using namespace std;

struct SignalGenerator {
    unsigned seed;
    SignalGenerator(): seed(1983) {};
    unsigned next() {
        unsigned ret = seed;
        seed = (seed * 214013u) + 2531011u;
        return (ret % 10000) + 1;
    }
};

unsigned solution(int target, int length) {
    SignalGenerator sg = SignalGenerator();
    queue<int> q;
    int sum = 0, cnt = 0;

    for (int i = 0; i < length; i += 1) {
        int val = sg.next();
        sum += val;
        q.push(val);

        while (sum > target && q.size()) {
            int first = q.front();
            sum -= first;
            q.pop();
        }

        if (sum == target) cnt += 1;
    }

    return cnt;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int tc, k, n;
    cin >> tc;

    while (tc--) {
        cin >> k >> n;
        cout << solution(k, n) << '\n';
    }

    return 0;
}