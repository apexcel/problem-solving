#include <iostream>
#include <string>

bool solution(std::string word) {
    int alphabets[26] = {0, };
    for (int i = 1; i <= word.length(); ++i) {
        if (word.c_str()[i - 1] != word.c_str()[i]) {
            alphabets[word.c_str()[i - 1] - 97]++;
        }
    }
    for (const auto& a: alphabets) {
        if (a > 1) return false;
    }
    return true;
}

int main() {
    int tc = 0, cnt = 0;
    std::string word;
    std::cin >> tc;
    while(tc--) {
        std::cin >> word;
        if (solution(word)) {
            cnt++;
        }
    }
    std::cout << cnt << std::endl;

    return 0;
}