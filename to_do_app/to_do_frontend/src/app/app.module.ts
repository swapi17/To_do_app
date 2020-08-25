import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { WebReqInterceptor } from './web-req.interceptor';
import { AuthService } from './auth.service';
import { WebRequestService } from './web-request.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './pages/notes/notes.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { CreateNoteComponent } from './pages/notes/create-note/create-note.component';
import { EditNoteComponent } from './pages/notes/edit-note/edit-note.component';
import { NotesService } from './notes.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, LoginPageComponent, SignupPageComponent, NotesComponent, CreateNoteComponent, EditNoteComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true }
  ]
})
export class AppModule { }
