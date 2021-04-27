import { getInput } from './denoInput.ts';

function josephusQ(peoples: number, kill: number) {
    let survivors = [];
    for (let i = 0; i < peoples; i += 1) {
        survivors[i] = i + 1;
    }

    while (survivors.length > 2) {
        survivors.shift();
        for (let i = 0; i < kill - 1; i += 1) {
            survivors[survivors.length - 1] = survivors.shift();
        }
    }

    return survivors;
}

let inputs = await getInput();
console.log(josephusQ(inputs[0], inputs[1]))