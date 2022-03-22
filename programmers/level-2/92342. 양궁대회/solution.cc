#include <iostream>
#include <string>
#include <vector>

using namespace std;

vector<int> res, ryan(11, 0);
int mx = 0;

int calc(vector<int>& apeach, vector<int>& ryan) {
    int apeachScore = 0, ryanScore = 0;
    for (int i = 0; i < 11; i += 1) {
        if (!apeach[i] && !ryan[i]) continue;
        apeach[i] >= ryan[i] ? apeachScore += 10 - i : ryanScore += 10 - i;
    }
    return ryanScore - apeachScore;
}

void dfs(int depth, int end, vector<int>& apeach, vector<int>& ryan) {
    if (depth == end) {
        int diff = calc(apeach, ryan);
        if (diff >= mx) {
            mx = diff;
            res = ryan;
        }
        return;
    }

    for (int i = 0; i < 11 && ryan[i] <= apeach[i]; i += 1) {
        ryan[i] += 1;
        dfs(depth + 1, end, apeach, ryan);
        ryan[i] -= 1;
    }
}

vector<int> solution(int n, vector<int> apeach) {
    dfs(0, n, apeach, ryan);
    if (mx == 0) return {-1};
    return res;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    return 0;
}