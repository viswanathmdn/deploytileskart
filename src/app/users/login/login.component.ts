import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
 
  
  userName: string='' ;
  password:number;
  zippattern:string='^[1-9][0-9]{5}$';
  
  constructor(private router:Router) { }
  login(){
    if(this.userName == null || this.userName == ""){
      alert("username is required");
    }
    else{
      sessionStorage.setItem("user",this.userName); 
      this.router.navigate(['/tiles']);
    }
    }

    ngOnInit(): void {

    }

  
  
  

 

    // studentList = []

    // student={
    //   name:'',
    //   phoneNumber:'',
    //   branch:''
    // }

    // addStudent(){
    //   this.studentList.push(this.student)
    //   console.log(this.studentList)
    // }
    // removeUser(index){
    //   console.log(index)
    //   this.studentList.splice(index,1)
    //   console.log(this.studentList)
    // }

}
