import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';



@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {
   
  categoryId: string; 
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //  this.route.params.subscribe(
    //   (params: Params) => {
    //     this.categoryId = params.categoryId;
    //     console.log(params.categoryId);
    //   }
    // )
  }

  updateCategory(name: string, description: string) {
    // this.categoryProductService.updateCategory(this.categoryId,new Category(name,description)).subscribe(() => {
    //   this.router.navigate(['/category']);
    // })
  }

}