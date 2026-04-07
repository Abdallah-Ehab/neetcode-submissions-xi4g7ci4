//another solution using prefix tree(trie)

class Node{
    constructor(){
        this.children = {};
        this.childCount = 0;
        this.endOfWord = false;
    }
}

class Trie{
    
    constructor(root){
        this.root = root;
    }
    insert(word){
        let node = this.root;
        for(var char of word){
            if(!node.children[char]){
                node.children[char] = new Node()
                node.childCount++
            }
            node = node.children[char]
        }
        node.endOfWord = true;
    }
    search(){
        let res = ''
        let node = this.root;
        while(node.childCount === 1 && !node.endOfWord){
            let char = Object.keys(node.children)[0];
            res += char;
            node = node.children[char];
        }
        return res
    }
}


class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        // I should implement a prefix tree or we can just brute force it
        // brute force solution
        // if(strs.length === 0) return "";
        // let end = 0;
        // let maxEnd = strs[0].length;
        // for(let i = 0; i < strs.length - 1; ++i){
        //     let j = i + 1;
        //     while (end < strs[i].length && 
        //     end < strs[j].length && end < maxEnd && 
        //     strs[i][end] === strs[j][end]){
        //         end++;
        //     }
        //     maxEnd = Math.min(end, maxEnd)
        //     end = 0
        // }
        // return strs[0].slice(0,maxEnd);
        const root = new Node()
        const prefixTree = new Trie(root)
        for(var s of strs){
            prefixTree.insert(s)
        }
        return prefixTree.search()
    }
}
