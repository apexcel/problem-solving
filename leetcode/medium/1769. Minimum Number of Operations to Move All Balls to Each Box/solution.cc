#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    vector<int> minOperations(string boxes) {
        int size = boxes.size();
        vector<int> vec(size, 0);

        int sum = 0, exist = 0;
        for (int i = 0; i < size; i++) {
            vec[i] += sum;
            if (boxes[i] == '1') exist += 1;
            sum += exist;
        }

        sum = 0, exist = 0;
        for (int i = size - 1; i >= 0; i--) {
            vec[i] += sum;
            if (boxes[i] == '1') exist += 1;
            sum += exist;
        }

        return vec;
    }
};

int main() {
    Solution solution;
    vector<int> s = solution.minOperations("110");
    for (int i = 0; i < s.size(); i++) {
        cout << s[i] << endl;
    }
    return 0;
}