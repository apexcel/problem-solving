/** https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    let left = 0, right = height.length - 1, area = 0;

    while (left < right) {
        const hl = height[left], hr = height[right];
        const currentArea = Math.min(hl, hr) * (right - left);

        if (area < currentArea) area = currentArea;
        hl < hr ? left++ : right--;
    }
    
    return area;
};
/**
 * left는 시작 인덱스부터 마지막까지
 * right는 마지막 인덱스부터 시작 인덱스까지 반대 방향으로 진행
 * left < right 교차하기 전까지 진행하여
 * 현재 크기가 지금까지의 크기보다 크면 새로운 크기로 저장한다.
 * 그리고 둘 중 큰 것은 고정하고 작은 것의 포인터를 이동
 * 1 8 6 2 5 4 8 3 7
 * 의 경우
 * left의 인덱스는 1(8) right는 8(7)이다.
 */