{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  /**
   * 캡슐화 (외부의 접근을 제한 하고 함수를 이용하여 내부의 프로퍼티에 접근한다.)
   * public : 공개적인 설정
   * private : 외부에서 설정 불가 (어느 누구도 접근 불가)
   * protected : 상속시 자식 클래스는 접근 가능
   */
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker { 
    // shot 당 gram 수
    // class level ( static 을 지정하게 되면 매번 인스턴스 생성시 중복해서 데이터가 잡히지 않는다.)
    // 메모리 낭비 방지
    private static BEANS_GRAM_PER_SHOT = 7; 

    // 보유한 gram 수
    private coffeeBeans: number = 0;  // instance (object) level 

    private constructor(coffeeBeans: number) {
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

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(2);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(30);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);

  amateur.makeCoffee();
  pro.makeCoffee();


}