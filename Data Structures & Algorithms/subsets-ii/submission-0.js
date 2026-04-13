class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let path = []
        let res = []
        nums.sort((a,b)=> a - b);
        const dfs = (i)=>{
            if(i === nums.length){
                res.push([...path])
                return
            }
            // all subsets that include nums[i]
            path.push(nums[i])
            dfs(i + 1)
            path.pop()

            // all subsets that don't include nums[i]
            while(i + 1 < nums.length && nums[i] === nums[i + 1])
            {
                i++;
            }
            dfs(i + 1)


        }
        dfs(0)
        return res;
    }
}
