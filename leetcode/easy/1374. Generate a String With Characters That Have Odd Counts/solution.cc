#include <string>

using namespace std;

class Solution {
public:
    string generateTheString(int n) {
        string s;
        if (n % 2 == 0) {
            s += 'a';
            n -= 1;
        }
        while (n--) {
            s += 'b';
        }
        return s;
    }
};

int main() {
    return 0;
}