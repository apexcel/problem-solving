#include <iostream>
#include <vector>

using namespace std;

int binSearch(vector<int> vec, int target) {
    int lo = 0, hi = vec.size() - 1, mid = (lo + hi) / 2;
    while (lo <= hi) {
        mid = (lo + hi) / 2;
        target < vec[mid] ? hi = mid - 1 : lo = mid + 1;
    }
    return hi + 1;
}

int LIS(vector<int> seq, int n) {
    if (n == 0) return 0;
    vector<int> tails;
    tails.push_back(seq[0]);
    int idx = 0;

    for (int i = 1; i < n; i += 1) {
        if (tails[idx] < seq[i]) {
            idx += 1;
            tails.push_back(seq[i]);
        }
        else tails[binSearch(tails, seq[i])] = seq[i];
    }

    return idx + 1;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int tc;
    cin >> tc;
    while (tc--) {
        int n;
        cin >> n;

        vector<int> seq;
        for (int i = 0; i < n; i += 1) {
            int k;
            cin >> k;
            seq.push_back(k);
        }

        cout << LIS(seq, n) << '\n';
    }
    
    return 0;
}