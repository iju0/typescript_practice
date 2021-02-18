interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log('full time');
  }

  workFullTime() {

  }
}

class PartTimeEmployee implements Employee {
  pay(): void {
    console.log('part time');
  }

  workPartTime() {

  }
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 리턴하는 함수는 좋지 않다. 💩
function pay(employee: Employee): Employee {
  employee.pay();
  return employee;
}


function pay2<T extends Employee>(employee: T): T {
  // extends Employee 이용하자
  // 제한적인 제네릭이 사용가능하다.
  employee.pay();
  return employee;
}

const jun = new FullTimeEmployee();
const bob = new PartTimeEmployee();

jun.workFullTime();
bob.workPartTime();

// 타입이 변경됨
const junAfterPay = pay(jun);
const bobAfterPay = pay(bob);

const obj = {
  name: 'jung',
  age: 20,
};

const obj2 = {
  animal: '🐕'
}

// keyof 특정 타입에 속에 있는
// 
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, 'name'));
console.log(getValue(obj, 'age'));
console.log(getValue(obj2, 'animal'));




