import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth/auth.service';

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
    private toastService: ToastrService) { }

  ngOnInit(): void {
  }

  toggleForm() {
    this.router.navigate(['/signup'])
  }

  submit(form: any) {
    this.auth.login(form).subscribe(res=>{
      if(res){
        this.toastService.success('Well done!', 'This is a success alert');
      }
    })
  }

}
