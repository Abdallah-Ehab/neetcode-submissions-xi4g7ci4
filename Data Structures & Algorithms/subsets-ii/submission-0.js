class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let perms = [[]]
        for(var n of nums){
            let new_perms = []
            for(var p of perms){
                for(let i = 0; i < p.length + 1; ++i){
                    let p_copy = [...p];
                    p_copy.splice(i,0,n);
                    new_perms.push(p_copy);
                }
            }
            perms = new_perms;
        }
        return perms;
    }
}
