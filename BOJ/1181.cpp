#include <iostream>
#include <algorithm>
#include <vector>
#include <string>

bool compare(const std::string &a, const std::string &b) {
    if (a.size() == b.size()) return a < b;
    else return a.size() < b.size();
}

int main() {
    std::ios::sync_with_stdio(false);
	std::cin.tie(NULL);

    int n;
    std::vector<std::string> v;
    std::string str;
    std::cin >> n;
    for (int i = 0; i < n; i++) {
        std::cin >> str;
        if (std::find(v.begin(), v.end(), str) == v.end()) {
            v.push_back(str);
        }
    }
    std::sort(v.begin(), v.end(), compare);
    for (int j = 0; j < v.size(); j++) {
        std::cout << v[j] << "\n";
    }
    
    return 0;
}