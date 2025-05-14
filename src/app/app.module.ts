import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FeaturesComponent} from './components/features/features.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {HeroComponent} from './components/hero/hero.component';
import {NgOptimizedImage} from '@angular/common';
import { DownloadComponent } from './components/download/download.component';
import {provideHttpClient} from '@angular/common/http';
import {MarkdownComponent, provideMarkdown} from 'ngx-markdown';
import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    DownloadComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    MarkdownComponent
  ],
  providers: [provideHttpClient(), provideMarkdown()],
  bootstrap: [AppComponent]
})
export class AppModule { }
