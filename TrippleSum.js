function threeSum(nums) {
    nums.sort((a, b) => a - b);

    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
          if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
        let temp = nums[i]
        let left = i + 1
        let r = nums.length - 1
        while (left < r) {
            let sum = temp + nums[left] + nums[r]
            if (sum === 0) {
                result.push([temp, nums[left], nums[r]])
                while (left < r && nums[left] === nums[left - 1]) {
                    left--
                }
                while (left < r && nums[r] === nums[r - 1]) {
                    r--
                }
                left++;
                r--;
            } else if (sum < 0) {
                left++
            } else {
               r--
            }
        }


    }

    //  console.log(num)

    return result;
}

let num = [1, 2, 3, 4, -1, -2, -3,]
console.log(threeSum(num))


