/**
 * type vs interface
 * interface?
 * 서로간의 약속을 나타냄 (규정된 규격)
 * 
 * types?
 * 
 */
{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }


  const obj1: PositionType = {
    x: 1,
    y: 1,
  };

  const obj2: PositionInterface = {
    x: 1,
    y: 1,
  };

  // class Position
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }

  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  // extension
  interface ZPositionInterface extends PositionInterface {
    x: number;
  }

  type ZPositionType = PositionType & { z: number };


  /**
   * interface 와 type 의 차이점
   */

  // 위의 인터페이스와 자동 결합이 가능하며, 모두 구현해야 한다.
  // 인터페이스만 가능 type은 불가능
  interface PositionInterface {
    z: number;
  }

  // type 만 가능한것
  type Person = {
    name: string,
    age: number,
  }

  type Name = Person['name']; // string
  type NumberType = number;
  type Direction = 'left' | 'right';

}
