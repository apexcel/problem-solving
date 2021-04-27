// https://programmers.co.kr/learn/courses/30/lessons/42890

const toIndex = (bits, colSize) => {
    const indices = [];
    // 오른쪽 shift를 이용해 1이 되는 경우의 i값이 인덱스 값이 된다
    // 1101일 경우 
    // 1101 >> 0 -> 1101 & 1 -> 1 인덱스 1
    // 1101 >> 1 -> 110 & 1 -> 0 인덱스 포함 안됨
    // 1101 >> 2 -> 11 & 1 -> 1 인덱스 2
    // 1101 >> 3 -> 1 & 1 -> 1 인덱스 3
    for (let i = 0; i < colSize; i += 1) {
        if (((bits >> i) & 1) === 1) indices.push(i);
    }
    return indices;
}

// 유일성 검사
const isUnique = (relation, rowSize, colSize, i) => {
    const set = new Set();

    for (let row = 0; row < rowSize; row += 1) {
        let temp = '';
        for (let col = 0; col < colSize; col += 1) {
            if (i & (1 << col)) temp += relation[row][col];
        }
        set.add(temp);
    }
    console.log(set)
    return set.size === rowSize;
}

// 최소성 검사
// 후보키가 될 수 있는 것들을 담은 배열과 부분 집합을 표현한 정수를 가져옴
// 0001 -> 1, 0110 -> 6
const isMinimal = (candidates, subset) => {
    // 후보 배열을 순회
    for (let i = 0; i < candidates.length; i += 1) {
        // 후보 배열 중 더 작은 것을 이미 포함한다면 false
        // 0010 & 0011 = 0010
        if ((candidates[i] & subset) === candidates[i]) return false;
    }
    return true;
}

const solution = relation => {
    // 행의 사이즈는 2차원 배열의 사이즈
    const rowSize = relation.length;
    // 열의 사이즈는 임의의 원소의 사이즈
    const colSize= relation[0].length;
    // 부분 집합의 크기는 2^n 개 이므로 1 을 n번 왼쪽으로 shift한 것과 같다
    const subsetSize = 1 << colSize;
    // 후보키가 담길 배열
    const candidates = [];

    // 후보키가 되려면 최소한 한 개의 속성은 있어야 하므로 0은 제외하고 1부터 시작
    for (let i = 1; i < subsetSize; i += 1) {
        // 각 속성을 비트로 나타낸 것
        // 0001은 학번
        // 0010은 이름
        // 0100은 전공
        // 이런식으로 1111은 학번, 이름, 전공, 학년
        // 최소성과 유일성을 검사한다
        console.log(t(relation, rowSize, colSize, i))
        if (isMinimal(candidates, i) && isUnique(relation, rowSize, colSize, i)) {
            // 만족하는 경우 배열에 추가
            candidates.push(i);
        }
    }
    // console.log(candidates)
    return candidates.length;
};



solution([["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]])