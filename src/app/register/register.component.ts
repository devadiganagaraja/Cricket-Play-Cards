import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private router: Router, 
    private fb: FormBuilder,
    private api : HttpService) {
    this.registerForm = this.fb.group({
      userName :['',Validators.required],
      mobile : ['',Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  register(){
    console.log(this.registerForm.value)
    this.api.register(this.registerForm.value).subscribe((res: any) => {
      this.router.navigate(['/login']);
    })
  }

}
