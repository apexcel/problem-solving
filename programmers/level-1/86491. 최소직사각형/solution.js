/**
 * @param {number[]} sizes 
 */
function solution(sizes) {
    let mw = -1, mh = -1;
    for (let [w, h] of sizes) {
        if (h > w) {
            if (h > mw) mw = h;
            if (w > mh) mh = w;
        }
        else {
            if (h > mh) mh = h;
            if (w > mw) mw = w;
        }
    }

    return mw * mh;
}

solution([[60, 50], [30, 70], [60, 30], [80, 40]])
solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])
solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])