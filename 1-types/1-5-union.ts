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
    response: {
      body: string;
    }
  }

  type FailState = {
    reason: string;
  }

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: 'logged in!'
      }
    }
  }

  // prinLoginState(state)
  // success -> body
  // fail -> reason
  function printLoginState(state: LoginState) {
    if('response' in state) {
      console.log(`${state.response.body}`);
    } else {
      console.log(`${state.reason}`);
    }
  }
}