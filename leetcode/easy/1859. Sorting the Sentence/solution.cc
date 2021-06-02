#include <string>
#include <sstream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    string sortSentence(string s) {
        stringstream words(s);
        string word;

        pair<int, string> p;
        vector<pair<int, string>> vec;

        while (words >> word) {
            int len = word.size();
            int index = int(word[len - 1]) - 48;
            vec.push_back(make_pair(index, word.substr(0, len - 1)));
        }

        sort(vec.begin(), vec.end());

        string res = "";
        int len = vec.size();
        for (int i = 0; i < len; i += 1) {
            res += vec[i].second;
            if (i != len - 1) res += " ";
        }
        return res;
    }
};

int main() {
    return 0;
}