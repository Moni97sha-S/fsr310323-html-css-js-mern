        //Q-1 What is the Property of Queue?
        // A) LIFO
        // B) FIFO
        // C) Round Robin
        // Res: B) First In First Out [FIFO]/First Come First Serve[FCFS]

        //Q-2 Select all the operations in a Queue?
        // A) Enqueue
        // B) Push
        // C) Pop
        // D) Dequeue
        // Res: A) & D) 


        //Q-3 What is the time complexity for the deletion of node from the end of the linked list?
         
        // A) O(n)
        // B) O(1)
        // C) O(logn)
        // D) O(n^2)
        // Res: A) O(n)

        //Q-4 Given below is the stack implementation for checking the number of brackets in a given string.
        /*
        def check_pairs_in_str(str):
        stack = Stack()
        for c in str:
         if c in ["{", "(", "["]:
           stack.push(c)
         else:
           if stack.is_empty():   
                print("[ERROR] : string not proper")
        return
        c_from_stack = stack.pop()    
        if c_from_stack is "{" and c is not "}":
        print("[ERROR] : string not proper")
        return
        if c_from_stack is "[" and c is not "]":
        print("[ERROR] : string not proper")
        return
        if c_from_stack is "(" and c is not ")":
        print("[ERROR] : string not proper")
        return 
        if not stack.is_empty():
        print("[ERROR] : string not proper")
        print("All Good !!!")
        */

        // If my String is {{[([{}])]

        // What will be the number of times the stack is being popped?
        
        // A) 3
        // B) 5 
        // C) 4 
        // D) 2 
        // Res: C) 4

        //Q-5 Name the operation which will return the topmost value of Stack without popping the stack?

        // A) peek()
        // B) pop()
        // C) push()
        // Res:  A) peek()
        // Reason:  

        //Q-6 Consider a given function which takes a single link list & does some updates on the same:
        /* 
                def function(self, singleLL):
                prev = None
                current = singleLL.head
                while current is not None:
                next = current.next
                current.next = prev
                prev = current
                current = next
                singleLL.head = prev
                return singleLL

                If the single link list (singleLL) is 10 -> 20 -> 30 -> 40
                If the function is called using func(singleLL), then what will be the updated link list?
         */ 
        // A) 10 -> 20 -> 30 -> 40
        // B) 20 -> 30 -> 40
        // C) 40 -> 30 -> 20 -> 10
        // D) 10 -> 20 -> 30
        // Res: C)  40 -> 30 -> 20 -> 10
        // Reason: .

        //Q-7 When we delete the queue completely what is to be done, please select the appropriate option?
        // A) head = None
        // B) tail = None
        // C) head = None and tail = None
        // Res: C) head = None and tail = None
        // Reason: 


        //Q-8 What is complexity when we enqueue data(insertion) in the queue?
        
        // A) O(logn)
        // B) O(n)
        // C) O(1)
        // D) O(n^2)
        // Res: C) O(1)

        //Q-9 What is the complexity of deleting a nodefrom the middle of the linked list?
        
        // A) O(logn)
        // B) O(n)
        // C) O(1)
        // D) O(n^2)
        // Res: B) O(n)
        // Reason: 

        //Q-10 Minimum number of stacks required to reverse a string?
        
        // A) 2
        // B) 1
        // C) 3
        // D) 4
        // Res: B) 1