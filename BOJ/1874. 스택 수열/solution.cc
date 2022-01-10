#include <iostream>
#include <vector>
#include <string>

using namespace std;

int n;
vector<int> vec;

string solution() {
    vector<int> s;
    string ret = "";

    for (int i = 0, cur = 1; i < n; i += 1) {
        while (cur <= vec[i]) {
            s.push_back(cur++);
            ret += "+\n";
        }
        int top = s.back();
        if (vec[i] == top) {
            ret += "-\n";
            s.pop_back();
        }
        else return "NO";
    }
    return ret;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    cin >> n;
    for (int i = 0; i < n; i += 1) {
        int k;
        cin >> k;
        vec.push_back(k);
    }

    cout << solution();

    return 0;
}