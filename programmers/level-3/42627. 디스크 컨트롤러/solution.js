/**
 * https://programmers.co.kr/learn/courses/30/lessons/42627
 * @param {numberp[][]} jobs 
 * @returns {number}
 */
function solution(jobs) {
    const q = [], size = jobs.length;
    let end = 0, total = 0, index = 0;

    jobs.sort((a, b) => a[0] - b[0]);
    while (index < jobs.length || q.length > 0) {
        if (index < jobs.length && end >= jobs[index][0]) {
            q.push(jobs[index]);
            q.sort((a, b) => a[1] - b[1]);
            index += 1;
            continue;
        }

        if (q.length > 0) {
            const [req, fin] = q.shift();
            end += fin;
            total += end - req;
        }
        else {
            // end보다 더 이후에 요청이 들어오는 경우
            // 해당 시간에 되어야 요청되기 때문에 queue가 비어있고
            // 해당 시간에 도달하지 않았다면 해당 시간으로 옮겨준다.
            end = jobs[index][0];
        }
    }

    return Math.floor(total / size);
}

// solution([[0, 3], [1, 100], [1, 9], [2, 6], [0, 99]])
// solution([[0, 3], [1, 9], [2, 6]])
// solution([[0, 3], [1, 9], [2, 6], [100, 9]])