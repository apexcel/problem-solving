// /** https://leetcode.com/problems/trapping-rain-water/
//  * @param {number[]} height
//  * @return {number}
//  */
//  1. Brute force
//  /**
//   * @param {number[]} height
//   * @return {number}
//   */
//  const trap = (height) => {
//      if (!height) return 0;
//      let sum = 0;
//      let leftMax = height[0];
//      let rightMax = 0;
     
//      for (let i = 1; i < height.length; i++) {
//          for (let j = i+1; j < height.length; j++) {
//              rightMax = Math.max(rightMax, height[j]);
//          }
//          sum += (Math.min(leftMax, rightMax) - height[i] > 0 ? Math.min(leftMax, rightMax) - height[i] : 0);
//          leftMax = Math.max(leftMax, height[i]);
//          rightMax = 0;
//      }
     
//      return sum;
//  };
//  2. Dynamic programming
//  using unshift
//  const trap = (height) => {
//      if (!height) return 0;
     
//      let sum = 0;
//      let length = height.length;
//      let leftMax = [height[0]];
//      let rightMax = [height[length - 1]];
     
//      for (let i = 1; i < length; i++) {
//          leftMax[i] = Math.max(leftMax[i-1], height[i]);
//      }
     
//      for (let i = length - 2; i >= 0; i--) {
//          rightMax.unshift(Math.max(rightMax[0], height[i]));
//      }
     
//      for (let i = 0; i < length; i++) {
//          sum += Math.min(leftMax[i], rightMax[i]) - height[i];
//      }
     
//      return sum;
//  }
//  3. Using Stack
//  const trap = (height) => {
//      if (!height) return 0;
     
//      let sum = 0;
//      const stack = [];
     
//      let i = 0;
     
//      while (i < height.length) {
//          while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
//              const top = stack[stack.length - 1];
//              stack.pop();
             
//              if (stack.length === 0) break;
             
//              const distance = i - stack[stack.length - 1] - 1;
//              const boundedHeight = Math.min(height[i], height[stack[stack.length - 1]]) - height[top];
//              sum += distance * boundedHeight;
//          }
         
//          stack.push(i++);
//      }
     
//      return sum;
//  }
//  4. Using 2 Points
//  const trap = (height) => {
//      if (!height) return 0;
     
//      let left = leftMax = rightMax = sum = 0;
//      let right = height.length - 1;
     
//      while (left < right) {
//          if (height[left] < height[right]) {
//              height[left] >= leftMax ? (leftMax = height[left]) : (sum += leftMax - height[left]);
//              left++;
//          } else {
//              height[right] >= rightMax ? (rightMax = height[right]) : (sum += rightMax - height[right]);
//              right--;
//          }
//      }
     
//      return sum;
//  }

// trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
// trap([4,2,0,3,2,5])