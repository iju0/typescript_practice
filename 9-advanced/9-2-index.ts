{
  const obj = {
    name: "jung",
  };

  // 접근방법
  // obj.name;
  // obj['name'];

  /**
   * 타입 또한 위와 같은 방법으로 접근이 가능함
   */
  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  // type : string
  type Name = Animal["name"];

  // male | female
  type Gender = Animal["gender"];

  const gender: Gender = "male";

  // name, age, gender union Type 으로 변환
  type Keys = keyof Animal;
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: 'jung',
    gender: 'male',
  }
}
