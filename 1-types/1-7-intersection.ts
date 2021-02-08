{
  /**
   * Intersection Types: & 
   */
  type Student = {
    name: string,
    age: number
  }

  type Worker = {
    empolyeeId: number;
    work: () => void;
  }

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    name: 'iju0',
    age: 30,
    empolyeeId: 123,
    work: () => {},
  })
  
}