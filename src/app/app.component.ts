import { Component } from '@angular/core';
import { CommonService } from './common.service';
import { FormControl,FormGroup,Validators} from '@angular/forms'
import { AstMemoryEfficientTransformer } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  title = 'MockApp';
  allUser: any
  userObj={
    name:'',
    mobile:'',
    email:'',
    age:'',
    gender:'',
  }
  loginForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(50)]),
    mobile:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    age:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
  })
  formObj: any;
  myForm: any;
    
  get name(){return this.loginForm.get('name')}
  get email(){return this.loginForm.get('email')}
  get mobile(){return this.loginForm.get('mobile')}
  get age(){return this.loginForm.get('age')}
  get gender(){return this.loginForm.get('gender')}

  constructor(private commonService:CommonService){}
ngOnInit(){
  
  this.getLatestUser()
}

  addUser(formObj:any){
    
    console.log(formObj)
    this.commonService.createUser(formObj).subscribe((response)=>{
      console.log("user added")
      this.getLatestUser()
      this.loginForm.reset()

    })

  }
  getLatestUser(){
    this.commonService.getAllUser().subscribe((response)=>{
      this.allUser = response

    })

  }
  editUser(user:any){
    this.userObj=user;
    alert("are you sure to display your details")
    }
    
  
  user(user: any) {
    throw new Error('Method not implemented.');
  }

  deleteUser(user:any){
    alert("are you sure to delete")
    this.commonService.deleteUser(user).subscribe(()=>{
      this.getLatestUser();
      alert("deleted")
    })

    }
    }
  

