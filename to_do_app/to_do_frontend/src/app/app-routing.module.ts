import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

import { NotesComponent } from './pages/notes/notes.component';
import { CreateNoteComponent } from './pages/notes/create-note/create-note.component';
import { EditNoteComponent } from './pages/notes/edit-note/edit-note.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
   { path: 'signup', component: SignupPageComponent },
    { path: 'notes', component: NotesComponent },
    { path: 'notes/create', component: CreateNoteComponent },
     { path: 'notes/edit/:id', component: EditNoteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
