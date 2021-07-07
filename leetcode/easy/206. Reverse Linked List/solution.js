// https://leetcode.com/problems/reverse-linked-list/
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    let prev = null, current = head, next = null;
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        // [current.next, prev, current] = [prev, current, current.next]
        // destructing을 이용해서 풀이 가능
    }
    return prev;
};

const l1 = new ListNode(1)
const l2 = new ListNode(2, l1)
const l3 = new ListNode(3, l2)
const l4 = new ListNode(4, l3)
const l5 = new ListNode(5, l4)
reverseList(l5)
