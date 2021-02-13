{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  /**
   * 캡슐화 (외부의 접근을 제한 하고 함수를 이용하여 내부의 프로퍼티에 접근한다.)
   * public : 공개적인 설정
   * private : 외부에서 설정 불가 (어느 누구도 접근 불가)
   * protected : 상속시 자식 클래스는 접근 가능
   */
  class CoffeeMaker { 
    // shot 당 gram 수
    // class level ( static 을 지정하게 되면 매번 인스턴스 생성시 중복해서 데이터가 잡히지 않는다.)
    // 메모리 낭비 방지
    private static BEANS_GRAM_PER_SHOT = 7; 

    // 보유한 gram 수
    private coffeeBeans: number = 0;  // instance (object) level 

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // class level 의 커피머신 만들기
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('not enough coffee beans');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false
      }
    }
  }

  const maker = CoffeeMaker.makeMachine(30);
  console.log(maker);

  maker.fillCoffeeBeans(30);
  console.log(maker);

  // getter, setter 
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        // validation 
      }
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) { }
  }

  const user = new User('jung', 'juyoung');
  console.log(user.fullName);

  user.age = 10;
  console.log(user.fullName);
}