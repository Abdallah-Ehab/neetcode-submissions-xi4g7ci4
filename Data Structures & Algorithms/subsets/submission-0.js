class Solution {
    path = []
    res = []
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        this.dfs(nums,0)
        return this.res;
    }
    dfs(nums,i){
        if(i === nums.length){
            this.res.push([...this.path])
            return
        }
        this.path.push(nums[i])
        this.dfs(nums, i + 1)

        this.path.pop()
        this.dfs(nums, i + 1)
    }

}
