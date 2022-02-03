import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { ToastService } from '../services/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router,
    private auth: AuthService,
    private toastService: ToastService) { }

  ngOnInit(): void {
  }

  toggleForm() {
    this.router.navigate(['/signup'])
  }

  submit(form: any) {
    this.auth.login(form).subscribe(res=>{
      if(res){
        this.toastService.add({
          type: 'success',
          title: 'Well done!',
          message: 'This is a success alert'
        });
      }
    })
  }

}
