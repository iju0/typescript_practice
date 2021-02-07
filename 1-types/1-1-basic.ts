{
  /**
   * JavaScript
   * Primitive: number, string, boolean, symbol, null, undefined (원시 타입)
   * Object: function, array ... 
   */

  // number
  const num: number = 1;

  // string
  const str: string = 'hello';

  // boolean
  const bool: boolean = false;

  // undefined
  let age: number | undefined;
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: string | null;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = 'strung';
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = 'hello';

  // void
  function print() {
    return;
  }

  // never 
  function throwError(message: string): never {
    // message -> server (log)
    // throw new Error(message)
    // while(true) { }
  }

  // object 💩
  let obj: object; 
  function acceptSomeObject(obj: object) { }
  acceptSomeObject({ name : 'juyoung'});

  
}