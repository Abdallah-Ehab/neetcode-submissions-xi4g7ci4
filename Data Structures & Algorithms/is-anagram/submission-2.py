class Solution:
    def isAnagram(self, firstString: str, secondString: str) -> bool:
        if len(firstString) != len(secondString):
            return False
        array_of_alphas = [0] * 26
        for s in firstString:
            array_of_alphas[ord(s) - ord('a')] +=1
        for t in secondString:
            array_of_alphas[ord(t) - ord('a')]-=1
        for a in array_of_alphas:
            if a > 0:
                return False
        return True