#include <vector>
#include <string>
#include <iostream>

int main() {
    std::vector<std::string> vec = {"c=","c-","dz=","d-","lj","nj","s=","z="};
    std::string S;
    std::cin >> S;

    for (int i = 0; i < vec.size(); ++i) {
        for (int j = 0; j < S.size(); ++j) {
            int found = S.find(vec[i]);
            if (found != std::string::npos) {
                S.replace(found, vec[i].length(), "#");
            }
        }
    }
    std::cout << S.length();
}