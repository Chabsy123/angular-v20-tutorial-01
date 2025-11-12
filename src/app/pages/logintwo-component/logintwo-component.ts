import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logintwo-component',
  imports: [ReactiveFormsModule],
  templateUrl: './logintwo-component.html',
  styleUrl: './logintwo-component.css',
})
export class LogintwoComponent {

    loginForm: FormGroup = new FormGroup({
        EmailId: new FormControl(''),
        Password: new FormControl('')
    });

    http = inject(HttpClient);
    router = inject(Router)

    onLogin(){
      debugger;
      const formValue = this.loginForm.value;
      this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", formValue).subscribe({
        next:(response:any) => {
          debugger;
          if(response.result){
            alert("Login Successful");
            this.router.navigateByUrl("/dashboard")
          }else{
            alert(response.message);
          }
        },
        error:(error) => {
          debugger;
          alert(error.statusText)
        }
      })
    }
}
