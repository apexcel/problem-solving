import { getInput } from './denoInput.ts';

function josephus(peoples: number, term: number) {
    let survivors = [];
    for (let i = 0; i < peoples; i += 1) {
        survivors[i] = i + 1;
    }
    console.log(survivors);
    
    let kill = 0;
    while (survivors.length > 2) {
        survivors.splice(kill, 1);
        if (kill === survivors.length) kill = 0;

        for (let k = 0; k < term - 1; k += 1) {
            kill += 1;
            if (kill === survivors.length) kill = 0;
        }
    }
    console.log(survivors);
    return survivors;
}

let inputs = await getInput();
josephus(inputs[0], inputs[1]);