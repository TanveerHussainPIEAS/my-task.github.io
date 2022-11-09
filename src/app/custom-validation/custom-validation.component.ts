import { Component, OnInit } from '@angular/core';
import { NgForm,Validators, AbstractControl,FormBuilder, FormControl } from '@angular/forms';



@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.css']
})
export class CustomValidationComponent implements OnInit {



  userType: any;
  mekdizPattern="([a-zA-Z])+([0-9])*([a-zA-Z])*@mekdiz.com";
  gmailPattern = "([a-zA-Z])+([0-9])*([a-zA-Z])*@gmail.com";
  enteredEmail=''

  // Creating Form controls/group

  myForm = this.myFormBuilder.group(
    {
      phoneNumberControl: new FormControl('', [Validators.required,Validators.pattern("\\+92-3([0-4]{1})([0-9]{1})-[0-9]{7}")]),
      cnicControl: new FormControl('', [Validators.required,Validators.pattern("[0-9]{5}-[0-9]{7}-[0-9]{1}")]),
      dobControl: new FormControl('', [Validators.required,
        Validators.pattern("[0-9]{2}/((Jan)|(Feb)|(Mar)|(Apr)|(May)|(Jun)|(Jul)|(Aug)|(Sep)|(Oct)|(Nov)|(Dec))/[0-9]{4}")]),
      userNameControl: new FormControl('', [Validators.required, Validators.pattern("([a-zA-Z])+([0-9])*([a-zA-Z])*")]),
      userTypeControl: new FormControl('', [Validators.required]),
      userEmailControl: new FormControl('', [Validators.required]),
      // userMekdizControl: new FormControl('', [Validators.required,Validators.pattern("([a-zA-Z])+([0-9])*([a-zA-Z])*")]),
    }
  )

  constructor(private myFormBuilder:FormBuilder) { }

  ngOnInit(): void {
  }





  // Custom Validators

  // URLValidator(control: AbstractControl) {
  //   if (!control.value.startsWith("https") || !control.value.includes('.com')) {
  //     return { invalidURL: true }
  //   }
  //   else {
  //     return null;
  //   }
  // } // End of Phone Validator
  onChangeUser() {

    if (this.userType === "mekdiz") {
      this.myForm.controls['userEmailControl'].setValidators(Validators.pattern(this.gmailPattern))
      this.userType = ''
      this.enteredEmail=''
    }

   else {
    this.myForm.controls['userEmailControl'].setValidators([Validators.pattern(this.mekdizPattern),Validators.required])
      this.userType = ''
      this.enteredEmail=''
    }

  
}



  onSubmit() {
    
    
    console.log(this.myForm.value)
    this.myForm.reset();
    // this.myForm.controls['phoneNumberControl'].clearValidators()
    // this.myForm.controls['phoneNumberControl'].setValue('')
    // this.myForm.controls['cnicControl'].clearValidators()
    // this.myForm.controls['dobControl'].clearValidators()
    // this.myForm.controls['userNameControl'].clearValidators()
    // this.myForm.controls['userNameControl'].clearValidators()
    // this.myForm.controls['userTypeControl'].clearValidators()
    // this.myForm.controls['userEmailControl'].clearValidators()
  }

}
