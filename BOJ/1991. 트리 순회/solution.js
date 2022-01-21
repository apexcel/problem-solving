const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
class Tree {
    constructor(nodes) {
        this.init(nodes);
    }

    init(nodes) {
        this.tree = {};
        this.root = 'A';
        nodes.forEach(node => {
            const [parent, left, right] = node.split(' ');
            this.tree[parent] = { left, right };
        });
    }

    order(type) {
        const path = [];
        const { root, tree } = this;
        const search = node => {
            if (node === '.') return;
            if (type === 'pre') path.push(node);
            if (tree[node].left) search(tree[node].left);
            if (type === 'in') path.push(node);
            if (tree[node].right) search(tree[node].right);
            if (type === 'post') path.push(node);
        };
        search(root);
        return path.join('');
    }
}

const tree = new Tree(input.slice(1));
console.log(tree.order('pre'));
console.log(tree.order('in'));
console.log(tree.order('post'));