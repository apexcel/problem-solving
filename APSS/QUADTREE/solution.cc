#include <iostream>
#include <string>

using namespace std;

string solution(string::iterator& it) {
    char head = *it;
    it += 1;
    if (head != 'x') return string(1, head);

    string upperLeft = solution(it);
    string upperRight = solution(it);
    string lowerLeft = solution(it);
    string lowerRight = solution(it);

    return string("x") + lowerLeft + lowerRight + upperLeft + upperRight;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int tc;
    cin >> tc;
    while (tc--) {
        string s;
        cin >> s;
        string::iterator it = s.begin();
        cout << solution(it) << '\n';
    }

    return 0;
}