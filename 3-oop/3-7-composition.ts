{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
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
    private coffeeBeans: number = 0; // instance (object) level

    public constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
    }

    clean(): void {
      console.log("clean machine..");
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log("grinding...");
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("not enough coffee beans");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up...");
    }

    private extract(shots: number): CoffeeCup {
      console.log("pulling shots...");
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      return this.milk.makeMilk(this.sugar.addSugar(coffee));      
    }
  }


  // constructor(
  //   private beans: number,
  //   private milk: MilkFrother,
  //   private sugar: SugarProvider
  // ) {
  //   super(beans);
  // }
  // makeCoffee(shots: number): CoffeeCup {
  //   const coffee = super.makeCoffee(shots);
  //   return this.milk.makeMilk(this.sugar.addSugar(coffee));
  // }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("steam some milk...");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 고오급 우유 거품기
  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("steam some milk...");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 최 고오급 우유 거품기
  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("steam some milk...");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log("getting some sugar...");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log("getting some sugar...");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkSteamer = new FancyMilkSteamer();
  const coldMilkSteamer = new ColdMilkSteamer();
  const noMilk = new NoMilk();
  // sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // machine
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, noSugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);
}
