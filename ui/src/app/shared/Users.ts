/**
 * Created by mak on 9/9/16.
 */
export interface User {
  id: number;
  username: string;
}

export class Users {
  public static uri: string = '/api/users';
  public static of = (id: number = 0, username: string): User => {
    return { id, username };
  }
}
