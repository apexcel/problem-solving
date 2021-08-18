/** https://leetcode.com/problems/jump-game/
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
    let p = 0;
    for (let i = 0; i < nums.length; i += 1) {
        if (p < i) return false;
        p = Math.max(p, i + nums[i]);
    }
    return true;
};

/**
 * 배열에 들어있는 원소의 값 이하 만큼 이동할 수 있다.
 * [2, 3, 1, 1, 4]일 때 처음 최대 2까지 이동할 수 있다.
 * 최초 0번 인덱스는 0만큼 움직여서 0에 도달했고 최대 2만큼 움직일 수 있다
 * 1번 인덱스는 1만큼 움직여서 1에 도달했고 최대 3만큼 움직일 수 있다.
 * 2번 인덱스는 2만큼 움직여서 2에 도달했고 최대 1만큼 움직일 수 있다.
 * 3번 인덱스는 3만큼 움직여서 3에 도달했고 최대 1만큼 움직일 수 있다.
 * 이런 식으로 반복해보면 배열의 원소 값 이하 만큼 움직일 수 있기 때문에
 * 최대 이동할 수 있는 값보다 작은 인덱스는 도달 가능성을 보장하므로 
 * 지금까지 이동한 값인 (i)와 이동할 수 있는 값(nums[i])를 더한 값이 기존 값보다 크다면
 * 갱신하면 된다.
 * 
 * 반대로 도달 지점인 4번인덱스를 기준으로 최초 지점을 가는 것도 동일하다.
 * function canJump(nums) {
 *      let p = nums.length - 1;
 *      for (let i = nums.length - 1; i >= 0; i -= 1) {
 *          if (i + nums[i] >= p) p = i;
 *      }
 *      return p === 0;
 * }
 */