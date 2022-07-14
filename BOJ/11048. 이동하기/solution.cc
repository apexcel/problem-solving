#include <iostream>

using namespace std;

int n, m;
int mat[1001][1001];
int dp[1001][1001];

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(nullptr);
	cout.tie(nullptr);

	cin >> n >> m;

	for (int y = 0; y < n; y += 1) {
		for (int x = 0; x < m; x += 1) {
			cin >> mat[y][x];
		}
	}

	for (int y = n - 1; y >= 0; y -= 1) {
		for (int x = m - 1; x >= 0; x -= 1) {
			dp[y][x] = mat[y][x] + max(dp[y + 1][x], dp[y][x + 1]);
		}
	}

	cout << dp[0][0];
	return 0;
}