{

  // 부분적으로 수정되는 변경되는 사용가능
  type Todo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: Todo = { 
    title: 'run typescript',
    description: 'study hard',
    label: 'study',
    priority: 'high',
  }

  console.log(updateTodo(todo, { priority : 'low'}));

}
