{
  // Java: Exception 클래스
  // JavaScript: Error 클래스

  // RangeError: Invalid array lenth
  // const array = new Array(000000000000000000000000000);

  // Error(Exception) Handling: try -> catch -> finally

  function readFile(fileName: string): string {
    if (fileName === 'not exist') {
      throw new Error(`file not exist! ${fileName}`);
    }
    return 'fileContents';
  }

  function closeFile(fileName: string): void {
    // 
  }

  const fileName = 'not exist';
  console.log(readFile(fileName));
  closeFile(fileName);


}