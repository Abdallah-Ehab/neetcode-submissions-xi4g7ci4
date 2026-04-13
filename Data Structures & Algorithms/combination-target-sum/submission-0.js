class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let path = []
        let result = []
        const dfs = (i,total)=>{
            if(total === target){
                result.push([...path])
                return  
            }
            if(total > target || i >= nums.length ){
                return
            }
            for(let j = i; j < nums.length; ++j){
                if(nums[j] > target) return;
                path.push(nums[j])
                dfs(j, total + nums[j])
                path.pop()

            }
        }

        dfs(0,0)
        return result;
    }
}
