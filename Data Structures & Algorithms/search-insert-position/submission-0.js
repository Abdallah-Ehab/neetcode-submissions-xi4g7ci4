class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        // we will do a binary search to
        // get the index to insert into
        let l = 0;
        let r = nums.length - 1;
        let res = nums.length
        while(l <= r){
            let mid = Math.floor((l + r) / 2)
            if(target === nums[mid]){
                return mid;
            }else if(nums[mid] > target){
                res = mid;
                r = mid - 1;
            }else {
                l = mid + 1;
            }
        }
        return res;
    }
}
