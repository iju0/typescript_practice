{
  /**
   * Type alias 의 사용 예제
   * Union Types: OR
   */
  type Direction = 'left' | 'right' | 'up' | 'down';

  function move(direction: Direction) {
    console.log(direction);
  }

  move('right');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // 예제 2
  // 로그인 예제
  // function: login -> success, fail
  type SuccessState = {
    result: 'success',
    response: {
      body: string;
    }
  }

  type FailState = {
    result: 'fail',
    reason: string;
  }

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!'
      }
    }
  }

  // prinLoginState(state)
  // success -> body
  // fail -> reason

  // discriminated 예제
  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(`${state.response.body}`);
    } else {
      console.log(`${state.reason}`);
    }
  }
}