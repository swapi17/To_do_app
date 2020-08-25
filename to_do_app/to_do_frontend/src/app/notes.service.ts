import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private webReqService: WebRequestService) { }


  getNotes() {
    return this.webReqService.get('notes');
  }

  createNote(title: string, description: string) {
    // We want to send a web request to create a list
    return this.webReqService.post('notes/create', { title, description});
  }

  updateNote(id: string, title: string, description) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`notes/${id}`, { title, description });
  }

 
  deleteNote(id: string) {
    return this.webReqService.delete(`notes/${id}`);
  }

  
}
