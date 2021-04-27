#include <cstdio>
#include <algorithm>
#include <vector>
#include <utility>

typedef struct coordinate {
    int x, y;
} coordinate;

bool compare(const coordinate &st, const coordinate &nd) {
    if (st.y < nd.y) return true;
    else if (st.y == nd.y) {
        if (st.x < nd.x) {
            return true;
        }
    }
    return false;
}

int main() {
    int n, c;
    coordinate coor;
    std::vector<coordinate> v;

    scanf("%d", &n);
    c=n;

    while (n--) {
        scanf("%d %d", &coor.x, &coor.y);
        v.push_back(coor);
    }

    std::sort(v.begin(), v.end(), compare);

    for (int i = 0; i < v.size(); i++) {
        printf("%d %d\n", v[i].x, v[i].y);
    }
    

    return 0;
}