{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  /**
   * 캡슐화 (외부의 접근을 제한 하고 함수를 이용하여 내부의 프로퍼티에 접근한다.)
   * public : 공개적인 설정
   * private : 외부에서 설정 불가 (어느 누구도 접근 불가)
   * protected : 상속시 자식 클래스는 접근 가능
   */
  class CoffeeMachine implements CoffeeMaker { 
    // shot 당 gram 수
    // class level ( static 을 지정하게 되면 매번 인스턴스 생성시 중복해서 데이터가 잡히지 않는다.)
    // 메모리 낭비 방지
    private static BEANS_GRAM_PER_SHOT = 7; 

    // 보유한 gram 수
    private coffeeBeans: number = 0;  // instance (object) level 

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    clean(): void {
      console.log('clean machine..');
    }

    // class level 의 커피머신 만들기
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log('grinding...');
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('not enough coffee beans');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up...');
    }

    private extract(shots: number): CoffeeCup {
      console.log('pulling shots...');
      return {
        shots,
        hasMilk: false
      }
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // 카페라떼 머신 
  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly sericalNumber: string) {
      // 자식 클래스에서 생성자를 호출하는 경우 부모의 생성자를 반드시 생성해야한다.
      super(beans);
    }

    private steamMilk(): void {
      console.log('steaming some milk..');
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      }
    }
  }

  // 달달한 커피 머신 
  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      
      console.log('add sugar...');

      return {
        ...coffee,
        hasSugar: true,
      }
    }
  }

  // 커피메이커의 인터페이스를 지정함으로써 다른 메소드는 호출하지 못하도록 방지 
  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, 'sss'),
    new SweetCoffeeMaker(16)
  ]

  machines.forEach(machine => {
    console.log('-----------------');
    machine.makeCoffee(1);
  })
}