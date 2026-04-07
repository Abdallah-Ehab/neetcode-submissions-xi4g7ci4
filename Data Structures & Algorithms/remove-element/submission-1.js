class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let count = 0;
        let cur = 0;
        for(let i = 0; i < nums.length; ++i){
            if(nums[i] === val) continue;
            nums[cur++] = nums[i]
            
        }
        return cur
    }
}
