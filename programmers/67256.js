// https://programmers.co.kr/learn/courses/30/lessons/67256

const solution = (nums, hands) => {
    const pad = {
        '1': [0, 0], '2': [0, 1], '3': [0, 2],
        '4': [1, 0], '5': [1, 1], '6': [1, 2],
        '7': [2, 0], '8': [2, 1], '9': [2, 2],
        '*': [3, 0], '0': [3, 1], '#': [3, 2],
    };
    let left = '*', right = '#', cmd = '';

    for (let i in nums) {
        const current = nums[i];
        if (current % 3 === 1) {
            cmd += 'L';
            left = current;
        }
        else if (current !== 0 && current % 3 === 0) {
            cmd += 'R'
            right = current;
        }
        else {
            const y = pad[current][0], x = pad[current][1],
                  leftY = pad[left][0], leftX = pad[left][1],
                  rightY = pad[right][0], rightX = pad[right][1],
                  leftCnt = Math.abs(y - leftY) + Math.abs(x - leftX),
                  rightCnt = Math.abs(y - rightY) + Math.abs(x - rightX);

            if (leftCnt < rightCnt) {
                cmd += 'L';
                left = current;
            }
            else if (rightCnt < leftCnt) {
                cmd += 'R'
                right = current;
            }
            else {
                if (hands === 'right') {
                    cmd += 'R'
                    right = current;
                }
                else {
                    cmd += 'L'
                    left = current;
                }
            }            
        }
    }
    return cmd;
};

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')
//solution([7, 1, 0], 'left')