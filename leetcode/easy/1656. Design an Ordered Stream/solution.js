/**
 * @param {number} n
 */
const OrderedStream = function(n) {
    this.stream = new Array(n);
    this.pos = 0;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.stream[idKey - 1] = value;
    let strings =  [];
    while (this.stream[this.pos]) {
        strings.push(this.stream[this.pos]);
        this.pos += 1;
    }
    return strings;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

const stream = new OrderedStream(5);
console.log(stream.insert(3, 'ccc'));
console.log(stream.insert(1, 'aaa'));
console.log(stream.insert(2, 'bbb'));
console.log(stream.insert(5, 'eee'));
console.log(stream.insert(4, 'ddd'));