class Solution:

    def encode(self, strs: List[str]) -> str:
        res = ''
        for s in strs :
            res+=  str(len(s)) + '#' + s
        print(res)
        return res
    
    def decode(self, s: str) -> List[str]:
        ##example : 4#neet4#code4#love3#you
        ## the algorithm would be if you meet any #
        ## you parse the number (4,13,20....)
        ## then you will have two pointers i,j to parse 
        ## i will be your main pointer and j will be your aux or helper
        i=j= 0
        res = []
        while i < len(s) and j < len(s):
            while s[j].isdigit():
                j+=1
            print(repr(s[i:j]))
            size= int(s[i:j])
            i = j + 1
            res.append(s[i:i+size])
            print(res)
            i+=size
            j=i
        return res
                