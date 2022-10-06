class Node{
    constructor(data){
        this.data=data
        this.next=null;
    }
}


class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }

    insert(val){
        if(this.head===null){
            this.head=this.tail=new Node(val);
            return;
        }
        let node=new Node(val);
        this.tail.next=node;
        this.tail=node;
    }
    create(arr){
        for(let i=0;i<arr.length;i++){
            this.insert(arr[i]);
        }
    }

    display(){
        while(this.head){
            console.log(this.head.data);
            this.head=this.head.next;
        }
    }
}


let list=new LinkedList();
list.create([1,2,3,4,5,6,7,8]);
list.display()
