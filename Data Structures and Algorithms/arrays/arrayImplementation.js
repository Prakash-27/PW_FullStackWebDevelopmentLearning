class MyArray {
    constructor(){
        this.length = 0; 
        this.data = {};
    }

    get(index){
        return this.data[index]
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return [`pushed length is ${this.length}`, `and pushed item in data array is ${item}`];
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return [`poped length is ${this.length}`, `and last poped item in data array is ${lastItem}`];
    }

    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
        return [`Deleted item in data array is ${item}`];
    }

    shiftItems(index){
        for(let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArray = new MyArray();
console.log(newArray.push('hi'));
console.log(newArray.push('you'));
console.log(newArray.push('!'));
console.log(newArray.delete(0));
console.log(newArray.push('are'));
console.log(newArray.push('nice'));
console.log(newArray.delete(1));
console.log(newArray);



