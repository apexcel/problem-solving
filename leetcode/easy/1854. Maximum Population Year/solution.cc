#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int maximumPopulation(vector<vector<int>>& logs) {
        vector<int> years(2051, 0);
        int maxPop = years[1950], maxYear = 1950;
        for (int i = 0; i < logs.size(); i += 1) {
            years[logs[i][0]] += 1;
            years[logs[i][1]] -= 1;
        }

        for (int i = 1950; i < years.size(); i += 1) {
            years[i] += years[i - 1];
            if (years[i] > maxPop) {
                maxPop = years[i];
                maxYear = i;
            }
        }
        return maxYear;
    }
};