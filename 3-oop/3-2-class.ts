{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker { 
    // shot 당 gram 수
    // class level ( static 을 지정하게 되면 매번 인스턴스 생성시 중복해서 데이터가 잡히지 않는다.)
    // 메모리 낭비 방지
    static BEANS_GRAM_PER_SHOT = 7; 

    // 보유한 gram 수
    coffeeBeans: number = 0;  // instance (object) level 

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // class level 의 커피머신 만들기
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
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

  const maker = new CoffeeMaker(20);
  console.log(maker);
  const maker2 = new CoffeeMaker(32);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(10);
  console.log(maker3);

}