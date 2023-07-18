class Node {
    constructor(value){
        this.value = value; // data
        this.next = null; // address
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    //! Add nodes at last end
    append(value){
        const newNode = new Node(value); //! creating a new node
        
        // Empty (0) nodes at starting point
        // Here we will do the linking code
        if(this.head == null && this.tail == null){
            // condition -> Empty LinkedList (No node as of now)
            this.head = newNode;
            this.tail = newNode;
        } else {
            // When there is new node, ur tail moves to next node
            //this.tail.next -> to access prev node's address part
            //this.head.value -> to access first node's data part
            // head.value -> 10
            // tail.value -> 10
            // tail.next -> address of 10
            this.tail.next = newNode; // Address of 1st node
            this.tail = newNode; // Shift tail to newNode
        }
    }
    
    //! Add nodes at first end
    prepend(value){
        const newNode = new Node(value); //! creating a new node

        // Link
        // this.head means complete node
        newNode.next = this.head;
        // change the head
        this.head = newNode;
    }
    
    print(){
        let current = this.head;
        const value = [];
        while(current){
            value.push(current.value);
        }
        console.log(value.join("->"));
    }

    isEmpty(){
        if(this.head == null && this.tail == null){
            console.log("You have empty linked list");
        } else {
            console.log("Your linked list is not empty");
        }
    }

    length(){

    }
    clear(){
        this.head = null;
        this.tail = null;
        console.log("Your Linked List is now cleared");
    }
    delete(index) {
        if(index == 0){
            this.head = head.next
        }
    }
}

const llObject = new LinkedList();
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




