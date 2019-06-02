import {Component} from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent {
  public phoneNumber: number;
  public userName: string;
  public errorField: string;
  public routerLink: string;
  private service: UserService;

  constructor(service: UserService) {
    this.service = service;
  }

  public async login(): Promise<any> {
    console.log(this.phoneNumber);
    const user = await this.service.getUserByNumber(this.phoneNumber);
    if (user) {
      this.errorField = undefined;
      this.routerLink = '/statistics';
    } else {
      this.routerLink = undefined;
      this.errorField = 'Please Register with us!';
    }
  }

  public async register(): Promise<any> {
    const user = await this.service.createUser(this.userName, this.phoneNumber);
    if (user) {
      this.errorField = 'Looks like you are registered! Please login or click on the register button again';
      this.routerLink = '/statistics';
    } else {
      this.routerLink = undefined;
      this.errorField = 'Something went wrong! Please try again!';
    }
  }

}

