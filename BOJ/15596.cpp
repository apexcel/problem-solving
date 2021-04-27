#include <vector>
#include <stdio.h>
int sum(std::vector<int> &a) {
    int res = 0;
    for (int i = 0; i < a.size(); i += 1) {
        res += a.at(i);
    }
    return res;
}
int main() {
    std::vector<int> vec = {1, 2, 3};
    printf("%d", sum(vec));
}