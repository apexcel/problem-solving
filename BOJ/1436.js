const input = parseInt(require('fs').readFileSync('/dev/stdin').toString(), 10);

const dooms = [];
let idx = 0;
let inRow = [false, false, false];

const doomsDay = (doomNumber) => {
    let qout = parseInt(doomNumber / 10, 10), rem = doomNumber % 10;
    inRow[idx % 3] = (rem === 6 ? true : false);
    idx++;

    if (idx > 2 && inRow[0] && inRow[1] && inRow[2] == true) {
        idx = 0;
        inRow = [false, false, false];    
        return true;
    }

    // console.log(`doomNumber ${doomNumber}`)
    // console.log(`inRow[${idx % 3}] qout: ${qout}  rem: ${rem}`);

    if (qout > 0) {
        return doomsDay(qout);
    }
    else {
        inRow = [false, false, false];    
        idx = 0;
        return false;
    }
}


let i = 0;
for (let j = 666; i <= 10001; j++) {
    if (doomsDay(j)) {
        dooms[i] = j;
        i++;
    }
}

console.log(dooms[input - 1]);