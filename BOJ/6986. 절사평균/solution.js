const [info, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, pos] = info.split(' ').map(Number);
const sorted = data.map(d => parseFloat(d) * 1e9).sort((a, b) => a - b);

const round = (avg, pos) => (avg + 0.5) / 1e9;

const mean = array => round(array.reduce((acc, cur) => acc + cur, 0) / array.length).toFixed(2);

const truncatedMean = (origin, pos) => mean(origin.slice(pos, origin.length - pos));

const adjustedMean = (origin, pos) => {
    const mn = origin.at(pos), mx = origin.at(-(pos + 1));
    const begin = Array(pos).fill(mn), end = Array(pos).fill(mx);
    const newArray = [...begin, ...origin.slice(pos, origin.length - pos), ...end];
    return mean(newArray);
}

console.log(truncatedMean(sorted, pos));
console.log(adjustedMean(sorted, pos));