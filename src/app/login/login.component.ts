import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserModule } from '../user/user.module';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {


  registerform: boolean = true
  eye: any = faEye
  eyeslash: any = faEyeSlash

  user: UserModule = {
    name: "",
    gmail: "",
    password: "",
    confirmpassword: ""
  }

  my_password: any
  my_confirmpassword: any



  showpassword: boolean = false

  ngOnInit(): void {
  }


  register(f: NgForm) {

    console.log(f.value)
  }


  setRegisterForm(val: boolean) {
    this.registerform = val
  }

  login(f: NgForm) {

  }
}
