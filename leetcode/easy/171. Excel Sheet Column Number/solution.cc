#include <string>
#include <cmath>

using namespace std;

class Solution {
public:
    int titleToNumber(string columnTitle) {
        int sum = 0;
        for (int i = columnTitle.size() - 1, j = 0; i >= 0; i--, j++) {
            sum += pow(26, j) * ((int)(columnTitle[i]) - 64);
        }
        return sum;
    }
};