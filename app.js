class Node {
    constructor(value) {
      this.value = value;
      this.next = null;  
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        let node = new Node(value);

        let current;

        if(this.head == null){
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    prepend(value) {
        let node = new Node(value);
        let current;

        if(this.head == null){
            this.head = node;
        } else {
            current = this.head;
            this.head = node;
            node.next = current;
        }
    }

    size() {
        let size = 0;
        let current;
        if(this.head == null){
            return size;
        } else {
            size++;
            current = this.head;
            while(current.next){
                size++
                current = current.next;
            }
            return size;
        }
        
    }

    tail() {
        let current;
        if(this.head == null){
            return this.head;
        } else {
            current = this.head;
            while(current.next){
                current = current.next;
            }
            return current;
        }
    }

    at(index) {
        let i = 0;
        let current = this.head;
        while(current != null){
            if(i == index){
                return current;
            }
            i++;
            current = current.next;
        }
        return null;
    }

    pop() {
        let current;
        let previous;
        if(this.head !== null){
            current = this.head;
            while(current.next){
                previous = current;
                current = current.next;

            }
            previous.next = null;
        } else {
            return "The list is empty."
        }
    }

    contains(value) {
        let current = this.head;
        while(current != null) {
            if(current.value === value) return true;
            current = current.next;
        }
        return false;
    }

    find(value) {
        let i = 0;
        let current = this.head;
        while(current != null){
            if(current.value === value){
                return i;
            }
            i++;
            current = current.next;
        }
        return null;
    }

    toString() {
        let str = "";
        let current;
        if(this.head == null){
            return null;
        } else {
            current = this.head;
            str += `${current.value} -> `
            while(current.next !== null){
                current = current.next;
                str += `${current.value} -> `
            }
            return str.slice(0, -4);
        }
    }
}

const list = new LinkedList;
list.append("10");
list.append("20");
list.append("30");
list.append("40");
list.append("50");
list.prepend("0");
console.log(list);

