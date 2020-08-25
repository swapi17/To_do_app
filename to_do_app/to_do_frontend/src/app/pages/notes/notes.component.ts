import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Note } from './notes.model';
import { NotesService } from '../../notes.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  
  notes: Note[] = [
    new Note("Electronics","Home appliances for use")
    ,new Note("Fashion","Branded clothes"),
    new Note("Food","Healthy food items"),
    new Note("Books","Understanding of the books")
    ,new Note("Kitchen","Kithen utensiles"),new Note("Mobile Phones","Discounted Mobile phones")];
  
  selectedNoteId: string;
  toggle: boolean = false;

  constructor(private notesService: NotesService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
    
    
    console.log("Category array loaded!")
    this.notesService.getNotes().subscribe((notes: Note[]) => {
        this.notes = notes;
        console.log(notes);
         
   });
  }
  onClick(){
    this.toggle = !this.toggle;
  }
 
  
  deleteNote(selectedNoteId:string){
    console.log("Note deleted");
    this.notesService.deleteNote(selectedNoteId).subscribe((res: any) => {
        
        console.log(res);
        this.router.navigate(['/notes']);
         
   });
  }
  

 
  
}