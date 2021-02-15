{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new OfflineError('no network!');       
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      // login...
      try {
        this.client.tryConnect();
      } catch (e) {
        console.log(e);
      }
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      this.userService.login();
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
  
}