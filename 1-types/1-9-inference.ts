{
  /**
   * 타입 추론
   * Type Inference
   */

   // 타입을 지정하지 않아도 알아서 인식함
   let text = 'hello';

    // text = 1; // error

    function pint(message = 'hello') {
      console.log(message);
    }

    // 리턴값도 추론 가능
    function add(x: number, y: number): number {
      return x + y;
    }

    // 변수도 타입 추론
    const result = add(1, 2);


}