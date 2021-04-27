// https://programmers.co.kr/learn/courses/30/lessons/42885

// 효율성 실패
// const solution = (people, limit) => {
//     people.sort((a, b) => a - b);
//     let counter = 0;
//     people.forEach((p, i) => {
//         if (p > 0) {
//             const left = limit - p;
//             people[i] = -1;
//             const available = people.filter(v => v <= left && v >= 40);
//             if (available.length > 0) {
//                 const willShip = available[available.length - 1];
//                 const index = people.findIndex(v => v === willShip);
//                 people[index] = -1;
//             }
//             counter += 1;
//         }
//     })
//     return counter;
// }

// 투 포인터를 이용한 문제 풀이
const solution = (people, limit) => {
    // 무게가 많이 나가는 순으로 정렬
    people.sort((a, b) => b - a);
    const len = people.length;
    let first = 0; second = len - 1, counter = 0;

    // 무게가 많이 나가는 사람 순으로 정렬시 마지막 사람과 무게가
    // 같거나 작으면 나머지 사람들도 2명씩 태워 보낼수 있기 때문
    while (first <= second) {
        // 만약 진행한 위치의 사람의 무게가 절반 이하면
        if (people[first] <= (limit / 2)) {
            // 남은 사람을 모두 더하고 2로 나누어 올린 수 만큼만 배가 필요
            counter += Math.ceil((second - first + 1) / 2);
            break;
        }

        // 배 숫자 증가
        counter += 1;
        // 두 명씩 가능하면 맨 뒤에서 한 칸 앞으로 옮김
        if (people[first] + people[second] <= limit) {
            second -= 1;
        }
        // 태워 보냈으므로 앞에서 한 칸 증가
        first += 1;
    }

    return counter;
};

// 다른 사람 풀이
// 전체적으로 위의 풀이와 같은 방법이나 정렬 순서가 다름
const solution = (people, limit) => {
    // 무게가 적은 순으로 정렬
    people.sort((a, b) => a - b);
    let i;
    // i는 가장 앞, j는 맨 뒤, i가 j보다 작을 때 까지 진행한다
    // 즉 남아 있는 가장 몸무게가 적은 사람의 무게와 그 이후의 사람과 작거나 같으면
    // 남은 사람들 모두 짝지어 보낼 수 없기 때문.
    for (i = 0, j = people.length - 1; i < j; j -= 1) {
        // 만약 짝지어 보낼 수 있으면 앞에서 한 칸 증가
        if (people[i] + people[j] <= limit) i += 1;
    }
    // 전체 길이에서 앞으로 증가한 길이를 빼주면 된다.
    return people.length - i;
}

console.log(solution([40, 50, 65, 57, 66, 100, 43], 100))
console.log(solution([70, 80, 50], 100))
console.log(solution([70, 80, 50, 50], 100))
