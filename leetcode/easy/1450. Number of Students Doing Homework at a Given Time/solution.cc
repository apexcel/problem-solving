#include <vector>

using namespace std;

class Solution {
public:
    int busyStudent(vector<int>& startTime, vector<int>& endTime, int queryTime) {
        int res = 0;
        for (int i = 0; i < startTime.size(); i += 1) {
            if (startTime[i] <= queryTime && endTime[i] >= queryTime) res += 1;
        }
        return res;
    }
};

int main() {
    return 0;
}