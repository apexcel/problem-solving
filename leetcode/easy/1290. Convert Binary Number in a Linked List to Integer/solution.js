// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = val ? val : 0;
    this.next = next ? next : null;
}

/**
 * @param {ListNode} head
 * @return {number}
 */
function getDecimalValue(head) {
    let n = head, bin = '';
    while (n) {
        bin += n.val;
        n = n.next;
    }
    parseInt(bin, 2);
};