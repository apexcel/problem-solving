/** https://leetcode.com/problems/add-two-numbers/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    let sum = BigInt(makeNumber(l1) + makeNumber(l2));
    let head;
    while (sum > 0n) {
        head = insertNode(head, sum % 10n);
        sum = sum / 10n;
    }
    return head ? head : new ListNode(0);
};

/**
 * @param {ListNode} listNode 
 */
function makeNumber(listNode) {
    let current = listNode, value = 0n, place = 10n, sup = 0n;
    while (current) {
        value += (place ** sup) * BigInt(current.val);
        sup += 1n;
        current = current.next;
    }
    return value;
}

/**
 * @param {*} head 
 * @param {number} next 
 */
function insertNode(head, value) {
    let newNode = new ListNode(value);
    if (head === undefined) {
        head = newNode;
    }
    else {
        let current = head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    return head;
}
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const l13 = new ListNode(3)
const l12 = new ListNode(4, l13)
const l11 = new ListNode(2, l12)

const l23 = new ListNode(4)
const l22 = new ListNode(6, l23)
const l21 = new ListNode(5, l22)

// const l11 = new ListNode(0)
// const l1 = new ListNode(0)

addTwoNumbers(l11, l21)
