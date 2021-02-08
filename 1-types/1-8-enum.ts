{
  /**
   * Enum 
   */

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;

  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;

  const DAYS_ENUM = Object.freeze({
    "MONDAY": 0, 
    "TUESDAY": 1,
    "WEDNESDAY": 3,
  });

  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  // 타입스크립트에서 enum 은 왠만해선 사용하지 말자 (컴파일상 오류를 찾을 수 없음)
  // Union 타입으로 대체해서 사용하자
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Firday,
    Staturday,
    Sunday
  }

  console.log(Days.Monday);
}