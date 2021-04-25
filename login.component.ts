import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  dict = { tanay : "Tanay@123" , 
                     susheel : "Susheel@123" , 
                     
                    };

  a:String="" ;
  a1:String="" ;
  b:String="" ;
  c:String="link3" ;
  visible:boolean = false;
  reg:boolean = true;
  user:String="" ;
  wel:boolean = false;
  pa:String="" ;
 
  

  check(){
    console.log(this.a)
    console.log(this.pa)
    // login
    if (this.a==this.pa)
    {
      this.b= this.c;
      this.visible= !this.visible;
      this.wel= !this.wel;
     
      alert("correct password");

    }
    else{
      alert("wrong password");
    }


    

  }

 
  checkreg(){



    if (this.a1==this.pa){
      alert("Password match ");
       this.reg= !this.reg;
      this.visible= !this.visible;
    }
    else{
      alert("Password did not match ");
    }
    

  }


  

}
