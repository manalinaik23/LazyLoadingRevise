import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  loginForm=new FormGroup({
    username:new FormControl('Sumit'),
    password:new FormControl('dqdqw')
  });

  loginDone(){
    console.log(this.loginForm.value);
  }
}
