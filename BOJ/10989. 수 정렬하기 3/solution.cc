#include <iostream>

using namespace std;

int arr[10001];

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n;
    cin >> n;

    while (n--) {
        int k;
        cin >> k;
        arr[k] += 1;
    }

    for (int i = 1; i < 10001; i += 1) {
        if (arr[i] > 0) {
            for (int j = 0; j < arr[i]; j += 1) {
                cout << i << '\n';
            }
        }
    }


    return 0;
}