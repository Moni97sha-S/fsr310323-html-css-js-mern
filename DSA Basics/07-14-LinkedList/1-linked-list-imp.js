//! Creation of node at initital stage
class Node {
    constructor(value){
        this.value = value; // data
        this.next = null; // address
    }
}

/*
     const n1 = new Node(10);
     const n2 = new Node(20);
     const n3 = new Node(30);
     console.log(n1); // Node { value: 10, next: null } creating a new node with value 10 add to LL
     console.log(n2); // Node { value: 20, next: null }
     console.log(n3); // Node { value: 30, next: null }
*/

//! Initially, Add Head & Tail Nodes
class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    //! Add nodes at last end
    append(value){
        const newNode = new Node(value); //! creating a first new node
        
        // Empty (0) nodes at starting point (1st node = newNode)
        // Here we will do the linking code
        if(this.head == null && this.tail == null){
            // condition -> Empty LinkedList (No node as of now)
            // head.value -> 10
            // tail.value -> 10
            // head.next -> address of null (newNode/nextNode)
            // tail.next -> address of null
            this.head = newNode;
            this.tail = newNode;
        } else {
            // When there is new node, ur tail moves to next node
            // From 2nd node = newNode
            // this.head.next -> to access next node's address part
            // this.head.value -> to access first node's data part
            // head.value -> 10
            // tail.value -> 20
            // head.next -> address of newNode (a2 of 20)
            // tail.next -> address of 20 is null
            this.tail.next = newNode; // Connecting newNode with Address of 1st node
            this.tail = newNode; // Shift tail to newNode appends
        }
    }
    
    //! Add nodes at first end
    prepend(value){
        const newNode = new Node(value); //! creating a new node

        //* Condition  --> Empty LinkedList (NO node as of now)
        if(this.head == null && this.tail == null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            // Link
        // If I say this.value, it connect only value part which is not our goal.
        // this.head means complete node which is our goal.
        newNode.next = this.head;

        // change/shift the head to newNode prepends
        this.head = newNode;
        }
    }
    
    print(){
        let currentNode = this.head; //* headNode's value
        const values = [];
        //TODO While CONDITION: currentNode -> currentNode != null
        while(currentNode){
            values.push(currentNode.value); //? Head's value push 1st time
            currentNode = currentNode.next; //? Shift currentNode to nextNode similar to increment in loops
        }
        console.log(values.join(" -> "));
    }

    isEmpty(){
        // There is no node in the LL, when my head & tail are null
        // Condition of empty LL (No node as of now)
        if(this.head == null && this.tail == null){
            console.log("You have Empty Linked List");
        } else {
            console.log("Your Linked List is NOT Empty");
        }
    }

    length(){
        let counter = 0;
        let currentNode = this.head; // head represents 1st node
        while(currentNode != null || currentNode){
            counter++;
            currentNode = currentNode.next;
        }
        console.log(`Your Linked List having ${counter} Nodes`);
        return counter;
    }

    clear(){
        this.head = null;
        this.tail = null;
        console.log("Your Linked List is now cleared");
    }

    delete(index) {
        //? Before deleting we need to check if LL is null or not
        if(index >= 0 && index < this.length()){
            if(this.head == null && this.tail == null){
                console.log("Your LL is Empty, so we cannot Delete Anything");
            } else {
                //! 1st node deletion
                if(index == 0){
                    this.head = this.head.next;
                } else {
                    //! Any Node Deletion
                    //TODO: Intitally prevNode is null & currentNode is 1st node
                    let currentNode = this.head;
                    let previousNode = null;

                    //* Loop Over LL - from currentNodeIndex till index
                    let currentNodeIndex = 0;
                    while(currentNodeIndex < index){
                        //? to change prevNode
                        previousNode = currentNode;
                        currentNode = currentNode.next;

                        currentNodeIndex++;
                    }
                    
                    //! Change of Address 
                    previousNode.next = currentNode.next;

                    //! Last Node Deletion
                    // previousNode.next == null -> !previousNode.next
                    if(!previousNode.next){
                        this.tail = previousNode;
                    }
                }
            }
        } else {
            console.log("Index is Invalid...");
        }
    }

//! insertAt()
    insertAt(index, value){
        if(index === 0){
            this.prepend(value);
        } else if(index === this.length()){
            this.append(value);
        } else if(index !== 0 && index !== this.length()){
            console.log("Middle insertion");
            // Creating new node to add at middle.
            const newNode = new Node(value);

            let currentNode = this.head;
            let currentIndex = 0;
            while(currentIndex < index - 1){
                currentNode = currentNode.next;
                currentIndex++;
            }
            console.log(newNode.value); // 4444
            console.log(currentNode.value); // 200

            //Shifting nextNode's address's place from currentNode to newNode
            newNode.next = currentNode.next;
            //Assigning address of newNode to currentNode.next part
            currentNode.next = newNode;

        } else {
            console.log("Invalid index: " + index);
        }
    }
}

const llObject = new LinkedList();
/* 
llObject.isEmpty();
llObject.append(10);
llObject.append(20);
llObject.print(); // 10 -> 20
// llObject.prepend(30);
// llObject.print(); // 30 -> 10 -> 20

llObject.append(30);
llObject.prepend(40); 
llObject.append(50); 
llObject.print(); // 40 -> 10 -> 20 -> 30 -> 50

llObject.delete(0);
llObject.print(); // 10 -> 20 -> 30 -> 50
*/

//? Insertion at middle
llObject.append(10);
llObject.append(20);
llObject.append(30);
llObject.append(40);
llObject.prepend(100);
llObject.prepend(200);
llObject.print(); // 200 -> 100 -> 10 -> 20 -> 30 -> 40
llObject.insertAt(0, 999); // 1st index
llObject.length();
llObject.print(); //999 -> 200 -> 100 -> 10 -> 20 -> 30 -> 40
llObject.insertAt(7, 1000); // last index
llObject.print(); //999 -> 200 -> 100 -> 10 -> 20 -> 30 -> 40 -> 1000
llObject.insertAt(2, 4444); // insert at middle 
llObject.print(); // 999 -> 200 -> 4444 -> 100 -> 10 -> 20 -> 30 -> 40 -> 1000



