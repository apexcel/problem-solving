#include <iostream>
#include <algorithm>
#include <cstring>
#include <vector>

using namespace std;

int N, C;
int volume[102], need[102];
int dp[1002][102];
string name[102];
vector<string> res;

int pack(int v, int item) {
	if (item == N + 1) return 0;
	int& res = dp[v][item];
	if (res != -1) return res;
	res = pack(v, item + 1);
	if (v >= volume[item]) {
		res = max(res, pack(v - volume[item], item + 1) + need[item]);
	}
	return res;
}

void reconstruct(int v, int item)
{
	if (item == N + 1) return; // 모든 아이템을 살펴 본 경우 종료
	if (pack(v, item) == pack(v, item + 1)) { // 담은 경우랑 담지 않은 경우랑 같은 경우
		reconstruct(v, item + 1);
	}
	else {
		res.push_back(name[item]);
		reconstruct(v - volume[item], item + 1);
	}

}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int tc;
	cin >> tc;
	while (tc--) {
		cin >> N >> C;
		memset(dp, -1, sizeof(dp));
		res.clear();

		for (int i = 1; i <= N; i += 1) cin >> name[i] >> volume[i] >> need[i];
		reconstruct(C, 1);
		cout << pack(C, 1) << " " << res.size() << endl;
		for (int i = 0; i < res.size(); i++) {
			cout << res[i] << endl;
		}
	}
}