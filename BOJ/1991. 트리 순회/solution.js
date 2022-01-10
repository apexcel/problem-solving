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

    preorder() {
        const path = [];
        const { root, tree } = this;
        const search = node => {
            if (node === '.') return;
            path.push(node);
            if (tree[node].left) search(tree[node].left);
            if (tree[node].right) search(tree[node].right);
        };
        search(root);
        return path.join('');
    }

    inorder() {
        const path = [];
        const { root, tree } = this;
        const search = node => {
            if (node === '.') return;
            if (tree[node].left) search(tree[node].left);
            path.push(node);
            if (tree[node].right) search(tree[node].right);
        };
        search(root);
        return path.join('');
    }

    postorder() {
        const path = [];
        const { root, tree } = this;
        const search = node => {
            if (node === '.') return;
            if (tree[node].left) search(tree[node].left);
            if (tree[node].right) search(tree[node].right);
            path.push(node);
        };
        search(root);
        return path.join('');
    }
}

const tree = new Tree(input.slice(1));
console.log(tree.preorder());
console.log(tree.inorder());
console.log(tree.postorder());