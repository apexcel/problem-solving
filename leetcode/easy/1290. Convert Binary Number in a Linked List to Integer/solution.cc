// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/submissions/
#include <iostream>

using namespace std;

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
    int getDecimalValue(ListNode* head) {
        int res = 0;
        ListNode *next = head;

        while (next) {
            res = res * 2 + next->val;
            next = next->next;
        }
        cout << res;
        return res;
    }
};

int main() {
    Solution solution;
    ListNode listnode;
    listnode.val = 1;
    listnode.next = new ListNode(0);
    listnode.next->next = new ListNode(1);
    solution.getDecimalValue(&listnode);
    return 0;
}