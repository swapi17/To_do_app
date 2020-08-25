import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  //categoryForm: FormGroup;

 

  constructor(
   
    private router: Router,
    
  ){ }

   ngOnInit() {
    //   this.categoryForm = this.fb.group({
    //   name: [''],
    //   description: [''],
    // })
  }
  
  onCreate(name: string, description: string) {
  //   this.categoryProductService.createCategory(name,description).subscribe(res=> {
      
  //       // we have logged in successfully
  //       this.router.navigate(['/category']);
      
  //     console.log(res);
      
  //  });
   }


}