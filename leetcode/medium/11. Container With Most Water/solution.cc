#include<vector>

using namespace std;

class Solution {
public:
    int maxArea(vector<int>& height) {
        int begin = 0, end = height.size() - 1, area = 0;

        while (begin < end) {
            int h_b = height[begin], h_e = height[end];
            int current_area = min(h_b, h_e) * (end - begin);
            if (area < current_area) area = current_area;
            h_b > h_e ? end-- : begin++;
        }

        return area;
    }
};