#include <cstdio>
#include <vector>
int main() {
    std::vector<std::pair<int, int>> v;
    int tc;
    scanf("%d", &tc);
    while (tc--) {
        int w, h;
        scanf("%d %d", &w, &h);
        v.push_back(std::make_pair(w, h));
    }

    for (int i = 0; i < v.size(); i++) {
        int rank = 1;
        for (int j = 0; j < v.size(); j++) {
            if (v[i].first < v[j].first && v[i].second < v[j].second) {
                rank++;
            }
        }
        printf("%d ", rank);
    }
    return 0;
}