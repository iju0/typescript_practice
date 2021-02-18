{
  // readonly 활용
  type Todo = {
    title: string;
    description: string;
  };


  function display(todo: Readonly<Todo>) {
    // todo 에 대한 값을 변경할 수 없도록 해야한다.
    // error!
    // todo.title = 'll';  
  }

}