const [n, origin, m, ...targets] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const catalog = (directions) => {
    const move = directions.split(' ')
    const reversed = move.slice().reverse().map(v => {
        switch (v) {
            case '1': return '3';
            case '2': return '4';
            case '3': return '1';
            default: return '2';
        }
    });
    const table = [directions, reversed.join(' ')];

    for (let i = 1; i < move.length; i += 1) {
        table.push([...move.slice(i), ...move.slice(0, i)].join(' '));
    }
    for (let i = 1; i < reversed.length; i += 1) {
        table.push([...reversed.slice(i), ...reversed.slice(0, i)].join(' '));
    }
    
    return table;
}
const list = catalog(origin);
const filtered = targets.filter(t => list.includes(t));
console.log(filtered.length);
console.log(filtered.join('\n'));
