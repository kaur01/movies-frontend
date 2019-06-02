import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;

  }

  async getUserByNumber(phoneNumber: number) {
    const url = `https://localhost:8080/api/user/${phoneNumber}`;
    return await this.httpClient.get(url).toPromise();
  }

  async createUser(userName: string, phoneNumber: number) {
    const url = `https://localhost:8080/api/user`;
    return await this.httpClient.post(url, {name: userName, number: phoneNumber}).toPromise();
  }
}
