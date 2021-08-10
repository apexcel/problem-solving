/** https://leetcode.com/problems/find-the-duplicate-number/
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
    for (let i = 0; i < nums.length; i += 1) {
        const val = Math.abs(nums[i]);
        if (nums[val] >= 0) {
            nums[val] *= -1;
        }
        else {
            return val;
        }
    }
};

/**
 * function findDuplicate(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i-1] === nums[i]) return nums[i];
    }
 * 처음에는 정렬 후 이전 수와 현재 수가 같으면 값을 반환하는 형태로 했음
 * 근데 시간이 오래 걸림
 * 이 방법은 한 번 방문한 지점의 값을 음수로 만든다.
 * 이미 방문한 곳은 다시 방문할 일이 없으므로 음수가 아니라 무조건 양수.
 * 재 방문이라면 이미 한 번 방문해서 음수로 만들었기 때문에 해당 수가 답이 된다.
 */