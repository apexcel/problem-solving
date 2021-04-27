#include <iostream>
#include <string>
#include <vector>
#include <utility>
#include <algorithm>
#include <tuple>

using namespace std;
typedef tuple<int, string, int> inputs;

bool cmp(const inputs &a, const inputs &b) {
    int age_a, age_b, idx_a, idx_b;
    string name_a, name_b;
    tie(age_a, name_a, idx_a) = a;
    tie(age_b, name_b, idx_b) = b;

    if (age_a < age_b) return true;
    else if (age_a == age_b) {
        if (idx_a < idx_b) return true;
    }
    return false;
}

int main() {
    ios::sync_with_stdio(false);
	cin.tie(NULL);

    int n, num;
    string str;
    vector<inputs> vec;

    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> num >> str;
        inputs p = make_tuple(num, str, i);
        vec.push_back(p);
    }

    sort(vec.begin(), vec.end(), cmp);

    for (int i = 0; i < vec.size(); i++) {
        int x, z;
        string y;
        tie(x, y, z) = vec[i];
        cout << x  << ' ' << y << "\n";
    }
}