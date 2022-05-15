const { promises } = require('fs');
const path = require('path');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ask = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, input => resolve(input));
    })
}

const main = async () => {
    const number = await ask('문제 번호: ');
    const title = await ask('문제 이름: ');
    const algorithms = await ask('알고리즘 분류: ').then(res => res.split(', ').map(v => `'${v}'`).join(', '));

    const template = `
---
문제번호: ${number}
문제이름: '${title}'
주소: 'https://www.acmicpc.net/problem/${number}'
분류: [${algorithms}]
---
    `.trim();

    const basePath = path.resolve(__dirname, `./BOJ/${number}. ${title}`);

    await promises.mkdir(basePath);
    await promises.writeFile(path.resolve(basePath, './README.md'), template);
    await promises.writeFile(path.resolve(basePath, './solution.js'), `const data = require('fs').readFileSync('/dev/stdin').toString().trim();`);

    process.exit(0);
};

main();