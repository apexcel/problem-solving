#include <vector>
#include <unordered_map>
#include <queue>

using namespace std;

class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> umap;
        vector<int> res(k);

        for (int i = 0; i < nums.size(); i++) {
            umap[nums[i]]++;
        }

        priority_queue<pair<int, int>> pq;
        unordered_map<int, int>::iterator iter;

        for (iter = umap.begin(); iter != umap.end(); iter++) {
            pq.push(make_pair(iter->second, iter->first));
        }

        for (int i = 0; i < k; i++) {
            res[i] = pq.top().second;
            pq.pop();
        }

        return res;
    }
};