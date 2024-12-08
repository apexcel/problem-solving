// https://leetcode.com/problems/remove-element/description/
function solution(nums: number[], val: number): number {
    let j = 0;
    // 투 포인터를 이용하여 범위를 조절
    for (let i = 0; i < nums.length; i += 1) {
        // 배열의 현재 값이 제거해야할 값과 다르면
        // 배열의 현재 인덱스에 값을 넣고 j를 1 증가시킨다.
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j += 1;
        }
    }

    return j;
};
