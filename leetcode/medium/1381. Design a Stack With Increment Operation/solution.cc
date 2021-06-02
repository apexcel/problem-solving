#include <vector>
#include <algorithm>

using namespace std;

class CustomStack {
public:
    int size = 0;
    vector<int> stack;

    CustomStack(int maxSize) {
        size = maxSize;
    }
    
    void push(int x) {
        if (stack.size() == size) return;
        stack.push_back(x);
    }
    
    int pop() {
        if (stack.size() == 0) return -1;
        int last = stack[stack.size() - 1];
        stack.pop_back();
        return last;
    }
    
    void increment(int k, int val) {
        int m = min(k, (int)stack.size());
        for (int i = 0; i < m; i += 1) {
            stack[i] += val;
        }
    }
};

int main() {
    return 0;
}