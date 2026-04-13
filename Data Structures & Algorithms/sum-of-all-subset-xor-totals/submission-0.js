class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        return this.dfs(0,0,nums)
    }
    dfs(i,total,nums){
        if(i >= nums.length){
            return total
        }
        return this.dfs(i+1, total ^ nums[i],nums) + this.dfs(i + 1, total,nums)
        
    }
}
