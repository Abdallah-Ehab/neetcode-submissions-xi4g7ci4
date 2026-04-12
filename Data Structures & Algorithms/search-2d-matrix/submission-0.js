class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // we need to make binary search in rows
        // and binary search in columns
        let rows = matrix.length
        let cols = matrix[0].length
        if(matrix.length === 0){
            return false;
        }
        for(let i = 0; i < rows; ++i){
            let currentRow = matrix[i]
            let l = 0;
            let r = currentRow.length - 1;
            while(l <= r){
                let mid = Math.floor((l + r) / 2);
                if(matrix[i][mid]  < target){
                    l = mid + 1;
                }else if(matrix[i][mid] > target){
                    r = mid - 1;
                }else{
                    return true;
                }
            }
            
        }
        return false;
    }
}
