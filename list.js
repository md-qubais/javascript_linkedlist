class LinkedList {
    constructor(data) {
        // this.array=[];
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.length = 1;
    }
    /** Append */
    append(data) {
        const newNode = { //first we creat a node
            value: data,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        // this.array.push(data)
    }
    /**Prepend*/
    prepend(data) {
        const newNode = {   //first we creat a node
            value: data,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode
        // this.array.push(data)
    }
    /**Insert a node  */
    travarsing(req) {  // function for traversing // iska use humne oindex and 2 index ko grab karne ke liye kia hai
        let counter = 0;
        let correntnode = this.head  // ab yanha per humara head and tail fix hai to ab hum currentnode mankar ek ek index aage badhege isliye currentnode= this.head
        while (counter != req) {  // hum yanha per while loop ko tab tak chalayege jab tak hume humara require index na mil jaye ab huamra required index hai 0 hum tab tak chalayege jab tak 0 mil na jaye
            counter++;
            correntnode = correntnode.next
        } return correntnode;
    }
    insert(index, data) {    // they take to parameter index,data
        const newNode = {
            value: data,
            next: null
        }
        const leaderNode = this.travarsing(index - 1)  // yanha per hum 2 ko grab karna chahte hai to uska index 0 hai isliye index-1 kyuki humara dia hua index 1 to 1-1 0 to ye raha 0 index= 2 ( yanha per this. ka use karna hi padega kyuki traversing class ka fucntion hai usse call karne ke liye this ka use karna pdega nhi to error dega )
        const nextNode = leaderNode.next;   // yanha per ab hume next node chahiye // ab iske bad frst ko insert kiye huy enode se lik karakar us node ko next wale node se link karana hai bus
        leaderNode.next = newNode;   // yanha per first node ko insert node ke barabar likha ja rha hai jaise 6 --> 4
        newNode.next = nextNode;    // fir yanha per newNode jo insert kia gya usse next node yani 4--> 14 se kia ja rha link
        // this.array.push(data)
    }
    /**DELETE */
delete(index){
const leaderNode = this.travarsing(index-1)
const unWantedNode = leaderNode.next
const nextNode = unWantedNode.next;
leaderNode.next = nextNode;
// console.log(arr)
// this.array.push(data)
}
/**REVERSE */
reverse(data){
    let first = this.head
    this.tail=this.head
    let second = first.next
    while(second){
        let temp = second.next
        second.next = first
        first= second
        second= temp
    }
    this.head.next = null
    this.head = first
    // this.array.push(data)
}
display(){
    console.log(this.array)
}
print(){
    let temp=this.head;
    let arr=[];
   while(temp.next){
    arr.push(temp.value)
    temp=temp.next;
   }
   console.log(arr)
}





}
const myList = new LinkedList(14);
myList.append(16)
// myList.append(26)
myList.prepend(6)
myList.insert(1, 4)
// myList.delete(1)
myList.reverse()
// myList.display()
// console.log(myList)
myList.print();