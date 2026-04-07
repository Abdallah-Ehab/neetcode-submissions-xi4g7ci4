class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mySet = new Set()
        for(var n of nums){
            if(mySet.has(n)){
                return true
            }
            mySet.add(n)
        }
        return false
    }
}
