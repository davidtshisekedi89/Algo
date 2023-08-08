                                    // Creating a Linked List from Scratch 

// Create a Node class
class Node{
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  // Create a Singly Linked List class
  class SLL {
    constructor(){
      this.head = null;
      // this.tail = null;
      // this.size = 0;
    }
    
  // Create an isEmpty method 
  isEmpty(){
    return this.head === null;
    }
    
  // Create an append method 
  append(value) {
    let newNode = new Node(value);
    
    if(this.isEmpty()){
      this.head = newNode;
    } else {
      this.insertAtBack(value);
    }
    return this;
    }
  // Create a insertAtBack method 
  insertAtBack(value){
    let curr = this.head;
    let newNode = new Node(value);
  
    while(curr.next){
      curr = curr.next;
    }
    curr.next = newNode;
    return this;
  }
  // Create a display method 
  display(){
    let result = "";
    let curr = this.head;
    
    if(this.head === null ){
      return false;
    }
    
    while(curr){
      if(curr.next === null){
        result = result + curr.value + "--> null"
      }
      else {
        result = result + curr.value + " --> "
      }
      curr = curr.next;
    }
    console.log(result);
  }
    // Create a remove method 
    remove(data){
      let tempNode = this.head;
      let nxt = this.head.next;
      
      // Checking if the list empty
      if(this.isEmpty()){
        return false;
      }
      if(tempNode.value === data){
        this.head = tempNode.next;
        return true;
      }
  
      while(nxt){
        if(nxt.value === data){
          tempNode.next = nxt.next;
        }
        tempNode = nxt;
        nxt = nxt.next;
      }
      return false;
    }
  }
  
  // Create an instance of the Singly Linked List 
  let list = new SLL();
  // Create the chaining method instance to add data to Singly Linked List 
  list.append("Hello").append("Greetings").append("Saludos").display();
  
  list.remove("Greetings");
  list.display();