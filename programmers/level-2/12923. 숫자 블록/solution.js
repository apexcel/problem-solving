/**
 * 
 * @param {number} x
 * @returns {number} 
 */
const getMaxDivisor = (x) => {
  if (x === 1) return 0;
  for (let i = 2; i * i <= x; i += 1) {
    if (x % i === 0 && Math.floor(x / i) <= 1e7) {
      return Math.floor(x / i);
    }
  }
  return 1;
}

/**
 * 
 * @param {number} begin 
 * @param {number} end 
 * @return {number[]}
 */
const solution = (begin, end) => {
  const ret = [];
  for (let i = begin; i <= end; i += 1) {
    ret.push(getMaxDivisor(i))
  }
  return ret;
}

console.table(solution(1, 10))