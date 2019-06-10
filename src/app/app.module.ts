import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ReposComponent } from './repos/repos.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ServerService} from './server.service';
import {FormsModule} from '@angular/forms';
import {Form} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReposComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,


  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
