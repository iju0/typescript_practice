interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}


type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
}

// 조건 (array 사용금지)
class MyStack implements Stack {

  private head?: StackNode;

  constructor(private _size: number = 0, private capacity: number = 0) {}

  get size() { 
    return this._size;
  }

  push(value: string): void {
    if (this.size === this.capacity) {
      throw new Error('stack is full');
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): string {
    if (this.head == null) {
      throw new Error('Stack is Empty!');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }

}


const stack = new MyStack(0, 10);
stack.push('ell1');
stack.push('ell3');
stack.push('ell4');

while (stack.size !== 0) {
  console.log(stack.pop());
}
