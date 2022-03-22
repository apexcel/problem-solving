const ListNode = class {
    constructor(key, prev = this, next = this) {
        this.key = key;
        this.prev = prev;
        this.next = next;
    }
}

const List = class {
    #head = null;
    #tail = null;
    #stk = [];

    constructor(n) {
        this.table = Array(n).fill('O');
    }

    get(key) {
        let cur = this.#head;
        while (cur) {
            if (cur.key === key) return cur;
            if (cur.next === this.#head) return;
            cur = cur.next;
        }
    }

    insert(key) {
        const node = new ListNode(key);
        if (!this.#head) {
            this.#head = node;
            this.#tail = node;
            return;
        }

        const lastNode = this.#tail;
        lastNode.next = node;
        this.#head.prev = node;

        node.next = this.#head;
        node.prev = lastNode
        this.#tail = node;
    }

    delete(node) {
        this.#stk.push(node);
        this.table[node.key] = 'X';

        const prevNode = node.prev;
        const nextNode = node.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        if (node === this.#head) this.#head = nextNode;
        if (node === this.#tail) {
            this.#tail = prevNode;
            return prevNode;
        }

        return nextNode;
    }


    select(node, type, pos) {
        let i = 0, cur = node;
        if (type === 'U') {
            while (i < pos && cur.prev) {
                cur = cur.prev;
                i += 1;
            }
        }
        else {
            while (i < pos && cur.next) {
                cur = cur.next;
                i += 1;
            }
        }
        return cur;
    }

    undo() {
        if (!this.#stk.length) return;
        const node = this.#stk.pop();
        this.table[node.key] = 'O';

        const prevNode = node.prev;
        const nextNode = node.next;

        prevNode.next = node;
        nextNode.prev = node;

        if (prevNode === this.#tail && nextNode === this.#head && prevNode.key < node.key) this.#tail = node;
        if (prevNode === this.#tail && nextNode === this.#head && prevNode.key > node.key) this.#head = node;
    }
}


function solution(n, k, cmd) {
    const list = new List(n);
    let node, res = '';

    for (let i = 0; i < n; i += 1) {
        list.insert(i);
        if (i === k) node = list.get(i);
    }

    for (let c of cmd) {
        const [type, pos] = c.split(' ');
        switch (type) {
            case 'U':
            case 'D':
                node = list.select(node, type, +pos);
                break;
            case 'C':
                node = list.delete(node);
                break;
            case 'Z': 
                list.undo();
                break;
        }
    }

    return list.table.join('');
}

// console.log(solution(8, 2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z"]))
// console.log(solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"]))
// console.log(solution(5, 0, ["C", 'C', 'D 2', 'C' ,'C']))
console.log(solution(5, 0, ["C", 'C', 'D 2', 'C', 'C', 'Z', 'Z', 'Z', 'Z', 'U 1', 'C', 'U 1', 'C']))
// console.log(solution(3, 2, ["C", "C", 'C', 'Z', 'Z']))
// console.log(solution(3, 2, ["C", "C", 'C', 'Z', 'Z']))
// console.log(solution(3, 2, ["C", "C", 'C', 'Z', 'Z', 'D 2', 'C']))