class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        let counts = {}
        let path = []
        let result = []
        for(var n of nums){
            counts[n] = (counts[n] || 0) + 1
        }
        const dfs = ()=>{
            if(path.length === nums.length){
                result.push([...path])
                return
            }
            for(var n in counts){
                if(counts[n] > 0){
                    path.push(n)
                    counts[n]-=1
                    dfs()
                    path.pop();
                    counts[n]+=1
                }
            }
        }
        dfs()
        return result;
    }
}
