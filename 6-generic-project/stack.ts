{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }
  
  
  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  }
  
  // 조건 (array 사용금지)
  class MyStack<T> implements Stack<T> {
  
    private head?: StackNode<T>;
  
    constructor(private _size: number = 0, private capacity: number = 0) {}
  
    get size() { 
      return this._size;
    }
  
    push(value: T): void {
      if (this.size === this.capacity) {
        throw new Error('stack is full');
      }
      const node = { value, next: this.head };
      this.head = node;
      this._size++;
    }
  
    pop(): T {
      if (this.head == null) {
        throw new Error('Stack is Empty!');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  
  }
  
  
  const stack = new MyStack<number>(0, 10);
  stack.push(123);
  stack.push(51234);
  stack.push(123);
  
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
  
}
