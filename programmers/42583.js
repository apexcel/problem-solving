// https://programmers.co.kr/learn/courses/30/lessons/42583

/**
 * 
 * 트럭이 1대가 지나가는데 걸리는 시간은 (길이 + 1)초 이다.
 * 왜냐하면 트럭이 다리의 첫 부분에 오를 때 1초, 이후 남은 구간을 완전히 통과하는데에 길이만큼의 시간이 걸리기 때문.
 * 예컨대 길이가 3이라고 한다면 다리의 첫 1/3 지점에 올라서면서 1초, 나머지 2/3 일 때 1초, 3/3 일 때 1초 통과하는데에 1초 
 * 따라서 길이 + 1의 시간이 걸린다.
 */

const sum = arr => arr.reduce((acc, v) => acc + v, 0);

const solution = (len, weight, trucks) => {
    let time = 1;
    let bridge = [];
    let currentWeight = 0;
    let index = 0;

    // 현재 트럭의 인덱스가 유효하거나 다리에 트럭이 존재 할 경우
    while (index < trucks.length || bridge.length > 0) {
        // 다리에 트럭이 있을 때
        if (bridge.length > 0) {
            // 맨 앞의 트럭을 가져온다
            let front = bridge[0];
            // 만약 해당 트럭의 통과 시간이 현재 시간이랑 같으면
            if (front[1] === time) {
                // 다리를 통과 한 것으로 간주한다.
                currentWeight -= front[0];
                bridge.shift();
            }
        }

        // 다리가 트럭을 받을 수 있고 트럭 배열의 인덱스가 유효할 때
        if (currentWeight < weight && (weight - currentWeight) >= trucks[index] && index < trucks.length) {
            // 다리에 트럭을 올리고 통과할 때의 시간을 저장한다.
            // 통과 할 때의 시간은 현재 시간 + 길이이다.
            bridge.push([trucks[index], time + len])
            // 현재 무게를 더한다.
            currentWeight += trucks[index];
            // 다음 트럭을 조회하기 위해 1을 추가
            index += 1;
            // 다리에 들어서는 순간 1초가 같이 추가 되므로 1초도 추가
            time += 1;
        }
        // 다리에 트럭을 올릴 수 없지만 다리에 트럭이 존재할 때
        else if (bridge.length > 0) {
            // 현재 시간을 다리의 맨 앞에 존재하는 트럭이 통과하는 시간으로 변경.
            time = (bridge[0])[1];
        }
    }
    // console.log(time)
    return time;
};
solution(2, 10, [7, 4, 5, 6])
solution(100, 100, [10])
// solution(100, 100, [10,10,10,10,10,10,10,10,10,10])
solution(5, 5, [2, 2, 2, 2, 1, 1, 1, 1, 1])
// solution(5, 5, [1, 1, 1, 1, 1, 2, 2, 2, 2])