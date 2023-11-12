import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './pages/blog/blog.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../../../environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {
  getRemoteConfig,
  provideRemoteConfig,
} from '@angular/fire/remote-config';
import { MARKED_OPTIONS, MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { markedOptionsFactory } from '../main/services/markdown-factory';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BlogComponent, BlogCardComponent, BlogPostComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideRemoteConfig(() => getRemoteConfig()),
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MARKED_OPTIONS,
        useFactory: markedOptionsFactory,
      },
    }),
  ],
})
export class BlogModule {}
