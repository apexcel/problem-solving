// https://leetcode.com/problems/seat-reservation-manager/
/**
 * @param {number} n
 */
function SeatManager(n) {
    this.minPQ = new MinPriorityQueue();
    this.nextSeat = 1;
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    return (this.minPQ.isEmpty()) ? this.nextSeat++ : this.minPQ.dequeue().element;
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    this.minPQ.enqueue(seatNumber, seatNumber);
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */