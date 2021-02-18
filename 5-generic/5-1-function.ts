{
  function checkNotnull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const result: number = checkNotnull(123);
  console.log(result);
  checkNotnull(null);
}