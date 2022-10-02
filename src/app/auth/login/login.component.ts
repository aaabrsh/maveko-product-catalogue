import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  responsedata: any;

  form = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void { }

  submit(): void{
    if(this.form.valid){
      this.service.proceedLogin(this.form.value).subscribe(res => {
        if(res != null){
          this.responsedata = res;

          if(this.responsedata.success == true){
            localStorage.setItem('token', this.responsedata.jwt);
            this.router.navigate([''])          
          }else{
            alert("not registered");
          }
        }
      })
    }
  }
}
