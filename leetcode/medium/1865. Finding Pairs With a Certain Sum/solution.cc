#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

class FindSumPairs {
public:
    unordered_map<int, int> umap;
    vector<int> n1, n2;

    FindSumPairs(vector<int>& nums1, vector<int>& nums2) {
        swap(n1, nums1);
        swap(n2, nums2);

        sort(n1.begin(), n1.end());
        for (auto n: n2) {
            umap[n] += 1;
        }
    }
    
    void add(int index, int val) {
        umap[n2[index]] -= 1;
        n2[index] += val;
        umap[n2[index]] += 1;
    }
    
    int count(int tot) {
        int res = 0;
        for (auto i = 0; i < n1.size() && n1[i] < tot; i += 1) {
            auto it = umap.find(tot - n1[i]);
            if (it != end(umap)) res += it->second;
        }
        return res;
    }
};

int main() {
    return 0;
}
/**
 * Your FindSumPairs object will be instantiated and called as such:
 * FindSumPairs* obj = new FindSumPairs(nums1, nums2);
 * obj->add(index,val);
 * int param_2 = obj->count(tot);
 */