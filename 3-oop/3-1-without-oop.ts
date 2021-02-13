{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // shot 당 gram 수
  const BEANS_GRAM_PER_SHOT = 7;

  // 보유한 gram 수
  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error('not enough coffee beans');
    }
    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    return {
      shots,
      hasMilk: false
    }
  }

  coffeeBeans = 10;
  console.log(makeCoffee(1));
}