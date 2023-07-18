class Queue{
    constructor(element) {
        this.items = [];
    }

    //! Add an element to Queue
    enqueue(element) {
     this.items.push(element);
    }
    
    //! Without empty queue only we can perform dequeue operation 
    // If we pop, our last entered element will be removed
    // Pop ->Deleted last item
    // But we need to remove the 1st element in Queue
    // Shift -> Deletes First item
    dequeue() {
     if(this.isEmpty()){
        console.log("Dequeue can't be done as queue is Empty");
     } else {
         this.items.shift();
     }
    }
    
    //! Without empty queue only we can perform peek operation
    // We have to see only first item in queue
    peek() {
        if(this.isEmpty()){
           console.log("Peek can't be calculated as queue is Empty");
        } else {
            console.log("Your peek of Queue --> ", this.items[0]);     
        }
    }

    //! Check if the queue is empty
    isEmpty() {
     if(this.items.length == 0){
        return true; // true means items queue is empty
     } else {
        return false; // false means items queue is not empty
     }
    }

    printQueue(){
     console.log(this.items);
    }

    clear() {
        this.items = [];
    }
    size(){
        console.log("Queue size: ==> ", this.items.length);
        // this.items.length;
    }

}

let queueObject = new Queue();

queueObject.enqueue(10);
queueObject.peek(); // -> 10
queueObject.enqueue(20);
queueObject.enqueue(30);
queueObject.size(); // 3
queueObject.printQueue();
queueObject.peek(); // -> 10

queueObject.dequeue(); // Removes 10 peek element
queueObject.peek(); // -> 20
queueObject.dequeue(); // Removes 20 peek element
queueObject.peek(); // -> 30
queueObject.printQueue(); // -> 20, 30

queueObject.dequeue(); // Removes 30 peek element
queueObject.printQueue(); // -> []
queueObject.peek(); // -> Peek can't be calculated as queue is Empty
queueObject.size(); // 0
queueObject.enqueue("Monisha"); 
queueObject.printQueue(); // -> Monisha
queueObject.peek();
queueObject.size();
queueObject.isEmpty();
queueObject.clear();
queueObject.size();



