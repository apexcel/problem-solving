const n = +require('fs').readFileSync('/dev/stdin').toString();
const period = '011235831459437077415617853819099875279651673033695493257291';
console.log(period[(n + 1) % 60]);