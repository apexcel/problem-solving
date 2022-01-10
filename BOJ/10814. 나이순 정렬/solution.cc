#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n;
    cin >> n;
    vector<string> list[201];
    string res = "";

    while (n--) {
        int age;
        string name;
        cin >> age >> name;
        list[age].push_back(name);
    }

    for (int i = 0; i < 201; i += 1) {
        for (string s: list[i]) {
            res += to_string(i) + ' ' + s + '\n';
        }
    }

    cout << res;

    return 0;
}