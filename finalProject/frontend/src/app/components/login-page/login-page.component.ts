import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';

  constructor(private formBuilder: FormBuilder, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required,Validators.email]],
      password:['', Validators.required]
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  // formControl
  get fc() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    alert("User Login Successful");
    
  }
}
