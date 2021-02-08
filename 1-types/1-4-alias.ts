{
  // typescript 의 가장 강력한 기능 1
  // aliases
  // 
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = 'iju0';
  const address: Text = 'korea';
  type Num = number;

  type Student = {
    name: string,
    age: number
  }

  const student: Student = {
    name: 'iju0',
    age: 30
  }

  /**
   * String Literal Types
   */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name';
  


}