---
문제이름: 'JOSEPHUS'
주소: 'https://algospot.com/judge/problem/read/JOSEPHUS'
---

# 풀이

## 첫 번째 풀이

624ms

```cpp
#include <iostream>

using namespace std;

int arr[1001];

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int tc, n, k, pos;

    cin >> tc;
    while (tc--) {
        cin >> n >> k;

        pos = k;
        for (int i = 0; i < n; i += 1) arr[i] = i + 1;

        int i = 0;
        while (n > 2) {
            if (arr[i] && pos == k) {
                arr[i] = 0;
                pos = 1;
                n -= 1;
            }
            if (arr[i] != 0) pos += 1;
            i = (i + 1) % n;
        }

        for (int i = 0; i < n; i += 1) {
            if (arr[i]) cout << arr[i] << ' ';
        }
        cout << '\n';
    }

    return 0;
}
```

## 두 번째 풀이

```cpp
#include <iostream>
#include <vector>

using namespace std;

vector<int> vec;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int tc, n, k, pos;

    cin >> tc;
    while (tc--) {
        cin >> n >> k;

        vec.clear();
        for (int i = 1; i <= n; i += 1) vec.push_back(i);

        int pos = 0;
        while (vec.size() > 2) {
            vec.erase(vec.begin() + pos);
            pos = (pos + k - 1) % vec.size();
        }

        for (int i = 0; i < 2; i += 1) {
            cout << vec[i] << ' ';
        }
        cout << '\n';
    }

    return 0;
}
```