#include<string>
#include<vector>
#include<set>

using namespace std;

vector<string> table = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};

class Solution {
public:
    int uniqueMorseRepresentations(vector<string>& words) {
        set<string> s;
        for (string word: words) {
            string str = "";
            for (char ch: word) {
                str += table[(int)(ch) - 97];
            }
            s.insert(str);
        }
        return s.size();
    }
};