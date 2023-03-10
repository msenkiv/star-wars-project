import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CharactersComponent } from './characters/characters.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieCharacterComponent } from './movie-character/movie-character.component';
import { ReviewComponent } from './review/review.component';
import { LoadingIconComponent } from './loading-icon/loading-icon.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    CarouselComponent,
    CharactersComponent,
    MovieDetailsComponent,
    HomeComponent,
    MovieCharacterComponent,
    ReviewComponent,
    LoadingIconComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
