# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:

        def reverse(head):
            cur = head
            prev = None
            while cur:
                temp = cur.next
                cur.next = prev
                prev = cur
                cur = temp
                
            return prev
        cur = head
        while cur:
            cur.next = reverse(cur.next)
            cur = cur.next

