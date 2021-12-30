function binSearch(arr, target) {
    let lo = 0, hi = arr.length - 1, mid;
    while (lo < hi) {
        mid = Math.floor((lo + hi) / 2);
        arr[mid] < target ? lo = mid + 1 : hi = mid;
    }
    return lo;
}

function LIS(seq) {
    if (!seq.length) return 0;
    const tails = [seq[0]];
    let idx = 0;

    for (let i = 1; i < seq.length; i += 1) {
        if (tails[idx] < seq[i]) {
            idx += 1;
            tails[idx] = seq[i];
        }
        else {
            const last = binSearch(tails, seq[i]);
            tails[last] = seq[i]
        }
    }
    
    console.log(idx + 1);
}