import { BehaviorSubject } from "rxjs";

class AuthService {
  private session = new BehaviorSubject<boolean>(false);

  login = async (username: string, password: string): Promise<boolean> => {
    if (username === "user" && password === "password") {
      this.session.next(true);
      return true;
    }
    return false;
  };

  logout = () => {
    this.session.next(false);
  };

  getSession = () => this.session.asObservable();
}

export default new AuthService();
