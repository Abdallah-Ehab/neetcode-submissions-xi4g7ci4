class Solution {
    /**
     * @param {number[]} temps
     * @return {number[]}
     */
    dailyTemperatures(temps) {
        // we need to use monotinically decreasing stack
        const stack = [[temps[0],0]]
        const res = new Array(temps.length).fill(0)
        for(let i = 1; i < temps.length; ++i){
            while(stack.length > 0 && stack.at(-1)[0] < temps[i]){
                let cur = stack.pop()
                res[cur[1]] = (i - cur[1])
            }
            stack.push([temps[i],i])
        }
        return res;
    }
}
