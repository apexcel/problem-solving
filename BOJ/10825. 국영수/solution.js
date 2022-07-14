const [_, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(data.map(d => {
  const splited = d.split(' ');
  const name = splited.shift();
  const scores = splited.map(Number);
  return [name, ...scores];
}).sort((a, b) => b[1] - a[1] || a[2] - b[2] || b[3] - a[3] || (a[0] > b[0]) - (a[0] < b[0]))
  .map(p => p[0])
  .join('\n')
);
