{
  /**
   * Type Assertions (왠만해선 사용금지)
   */
  function jsStrFunc(): any {
    return 'hello';
  }

  const result = jsStrFunc();

  // 타입을 확신할 때 
  // Type Assertions 를 사용
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));  // error

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  numbers!.push(2);

}