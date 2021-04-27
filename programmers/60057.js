// https://programmers.co.kr/learn/courses/30/lessons/60057

const solution = str => {
    // 문자열의 길이는 1 ~ 1000 이므로 1일때는 바로 1을 반환.
    if (str.length === 1) return 1;

    // 전체 길이의 반 이상 넘어가면 압축하는 것이 불가능 하므로 길이의 반 까지만 확인하면 된다.
    const len = Math.floor(str.length / 2);
    // 반환 값이 담길 변수
    let total = str.length;

    // 1부터 시작해서 전체 길이의 반까지
    for (let i = 1; i <= len; i += 1) {
        // substring 메서드는 substring(start, end)로 start의 문자열부터 end직전의 문자열을 반환한다.
        // substring(0, 0)은 공백을 반환함.
        let sub1 = str.substring(0, i);
        // 최소 문자열의 길이는 1
        let counter = 1;
        // 압축된 문자열이 담길 변수
        let compressed = '';

        // 1칸씩 자를 때, 2칸 씩 자를 때 ... 점차 늘려가며 문자열 끝까지 확인한다.
        for (let j = i; j < str.length; j += i) {
            // 두번 째 서브스트링은 첫 서브 스트링 이후 만큼 잘라야 하므로
            // substring(j, j+i)가 된다.
            let sub2 = str.substring(j, i + j)
            // 문자열이 같을 때는
            if (sub1 === sub2) {
                // 카운터 값 증가
                counter += 1;
            }
            // 다를 때는
            else {
                // 카운터가 1이라는 것은 비교해서 같은 것이 이전까지 하나도 없었다는 뜻이므로
                // 숫자를 붙이지 않고 그냥 문자열 자체만 붙여준다.
                // 해당 조건이 없을 경우 1abc 이렇게 붙게된다.
                compressed += (counter === 1) ? sub1 : (counter + sub1);
                // 뒤의 문자열에 대해서 계속 비교를 해나가야 하므로 sub1에 sub2를 대입한다.
                sub1 = sub2;
                // 카운터 값을 1로 초기화해준다.
                counter = 1;
            }

            // 비교하는 문자열이 남을 경우인데
            // substring(start, end)는 end 부분이 문자열의 길이를 초과하면 해당 문자열 끝까지만 반환한다.
            // "abc".substring(1, 7)은 "bc"이다.
            // 예컨대 abcabcab를 3칸씩 자를 때 마지막 ab는 길이가 모자르게 된다. 이 경우일 때를 확인해준다.
            if (i + j >= str.length) {
                // 만약 카운터 값이 1이 아니라면 카운터 + 서브스트링1을 아니라면 서브스트링2를 붙여준다.
                compressed += (counter !== 1) ? (counter + sub1) : sub2;
                // 종료 후 바깥 for문을 진행
                break;
            }
        }
        // 최초의 total 값은 문자열 자체의 길이
        // total 값 보다 압축문자열의 길이가 작거나 같으면 압축문자열의 길이로 바꿔주고 그렇지 않으면 그대로 둔다.
        total = total >= compressed.length ? compressed.length : total;
    }
    console.log(total)
    return total;
};

solution("ababcdcdababcdcd")
solution("abcabcabcabcdededededede")
solution("xababcdcdababcdcd")