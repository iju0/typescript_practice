{
  // Array
  const fruits: string[] = ['a', 'b']
  const scroes: Array<number> = [1, 2, 3]

  function printArray(fruits: readonly string[]) {}

  // Tuple -> 
  let student: [string, number];
  student = ['name', 123];

  // 가독성이 떨어짐
  student[0]
  student[1]

  // 대체 방법
  // interface, type, alias, class
  // 또는 아래와 같이 처리
  // React 처럼 처리
  const [name, age] = student;


}