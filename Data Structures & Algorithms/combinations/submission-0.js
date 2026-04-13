class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let res = [];
        let path = [];
        const backtrack = (start)=>{
            if(path.length === k){
                res.push([...path])
                return
            }
            for(let i = start; i < n + 1; ++i){
                path.push(i)
                backtrack(i+1)
                path.pop()
            }
        }
        backtrack(1);
        return res;
    }
}
