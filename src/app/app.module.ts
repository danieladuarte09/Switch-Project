import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/List/post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { SideNaveComponent } from './components/List/side-nave/side-nave.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { ModalNewPostComponent } from './components/modal-new-post/modal-new-post.component';
import { EntertainmentComponent } from './components/explorer/entertainment/entertainment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    SideNaveComponent,
    NewPostComponent,
    ExplorerComponent,
    ModalNewPostComponent,
    EntertainmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    NgbModule,
    MatTabsModule

    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
