class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
       
        if len(s) != len(t):
            return False
        count1 = Counter(s)
        count2 = Counter(t)
        for c in s:
            if count1[c] != count2[c]:
                return False
        return True