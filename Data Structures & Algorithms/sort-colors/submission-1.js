class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let bucket = new Array(3).fill(0)
        for(let i = 0; i < nums.length; ++i){
            bucket[nums[i]]++
        }
        let cur = 0;
        for(let i = 0; i< nums.length; ++i){
            while(bucket[cur] === 0){
                cur++
            }
            nums[i] = cur
            bucket[cur]--
        }
        
    }
}
