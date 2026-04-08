class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = []
        for(var o of operations){
            if (o === '+'){
                let x = stack.at(-1);
                let y = stack.at(-2);
                console.log(x);
                console.log(y);
                stack.push(x+y)
            }else if (o.toLowerCase() === 'd'){
                let d = stack.at(-1)
                stack.push(d*2)
            }else if (o.toLowerCase() === 'c'){
                stack.pop()
            }else{
                stack.push(parseInt(o))
            }
        }
        if(stack.length === 0){
            return 0
        }
        return stack.reduce((acc,val)=>acc+val)
    }
}
