// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
#include <iostream>
#include <string>
#include <map>

using namespace std;

class Solution {
public:
    string sortString(string s) {
        map<char, int> map; // key 값을 기준으로 오름차순 정렬이 된다. 변경 가능.
        string output;
        for (char ch: s) {
            map[ch]++;
        }

        while(output.size() != s.size()) {
            for (auto it = map.begin(); it != map.end(); it++) {
                if (it->second != 0) {
                    output += it->first;
                    map[it->first]--;
                }
            }
            for (auto it = map.rbegin(); it != map.rend(); it++) {
                if (it->second != 0) {
                    output += it->first;
                    map[it->first]--;
                }
            }
        }
    cout << output;
    return output;
    }
};

int main() {
    Solution solution;
    string s = "aaaabbbbcccc";
    solution.sortString(s);
    return 0;
}