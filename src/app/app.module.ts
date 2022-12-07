import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GrandChildComponent } from './child/grand-child/grand-child.component';
import { ChildComponent } from './child/child.component';
import { GrandGrandChildComponent } from './child/grand-child/grand-grand-child/grand-grand-child.component';
import dayjs from 'dayjs';
import { UsersService } from './shared/services/users.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    GrandChildComponent,
    ChildComponent,
    GrandGrandChildComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: 'date',
      useValue: dayjs,
    },
  ],
})
export class AppModule {}
