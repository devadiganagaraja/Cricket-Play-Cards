import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http-services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router, 
    private fb: FormBuilder,
    private api : HttpService
    ) {
      this.loginForm = this.fb.group({
        mobile : ['',Validators.required],
        password: ['', Validators.required]
      })
    
   }

  ngOnInit(): void {
  }

  login(){
    this.api.login(this.loginForm.value).subscribe((res: any) => {
      if(res.userName != null){
        localStorage.setItem("userId",res.userId);
        this.router.navigate(['/homePage']);
      }
      else{
        alert("Please register!!!")
      }
    })
  }
}
