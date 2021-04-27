const sc = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [A, B] = sc;

const solution = (A, B) => {
    const len = A.length;
    let print = '';
    // &
    for (let i = 0; i < len; i += 1) {
        print += A[i] & B[i];
    }
    print += '\n';

    // |
    for (let i = 0; i < len; i += 1) {
        print += A[i] | B[i];
    }
    print += '\n';

    // ^
    for (let i = 0; i < len; i += 1) {
        print += A[i] ^ B[i];
    }
    print += '\n';

    // ~A
    for (let i = 0; i < len; i += 1) {
        print += A[i] ^ 1;
    }
    print += '\n';

    for (let i = 0; i < len; i += 1) {
        print += B[i] ^ 1;
    }

    console.log(print)
}
solution(A, B);