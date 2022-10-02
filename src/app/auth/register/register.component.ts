import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  responsedata: any;

  form = new FormGroup({
    username: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    user_type: new FormControl('Customer', Validators.required),
    is_active: new FormControl(true, Validators.required),
    confirm_password: new FormControl("", Validators.required),
  });

  constructor(private router: Router, private service: AuthService) { }

  ngOnInit(): void { }

  submit(): void{
    if(this.form.valid){
      this.service.proceedRegister(this.form.value).subscribe(res => {
        if(res != null){
          this.responsedata = res;
          this.router.navigate(['/login'])
        }
      })
    }
  }

}
