import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormBuilder,Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
 selector: 'app-register',
 templateUrl: './register.component.html',
 styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 user:User;
 registerForm:FormGroup;
 zipCodePattern : string = "^[1-9][0-9]{5}$";
 saveMessage:string = "";

constructor(private fb:FormBuilder,private userService:UserService) {
this.registerForm = this.fb.group({
  userName: ['viswa',Validators.required],
  email: ['abc@gmail.com'],
  phoneNumber: ['7093775308'],
  billingAddress: this.fb.group({
    doorNumber: ['12-14/1'],
    city: ['AKP'],
    zip: ['515445',Validators.pattern(this.zipCodePattern)]
  }),
});

this.user = new User();
}
 ngOnInit() {
 }

 register(){
   console.log(this.registerForm.value);
 
   this.user = this.registerForm.value;

   this.userService.createUser(this.user).subscribe((message)=>{
     console.log(message);
     this.saveMessage = message["msg"];
   })
 }

}

