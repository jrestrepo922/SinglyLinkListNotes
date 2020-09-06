// piece of data - val 
// reference to the next node- next 

class Node{
    constructor(val){
        this.val = val; 
        this.next = null; 
    }


}




var first = new Node("Hi");
first.next = new Node("There");
first.next.next = new Node("How");
first.next.next.next = new Node("are");
first.next.next.next.next = new Node("you")



























var output = document.getElementById('output');
output.innerText = "The return value of your function"