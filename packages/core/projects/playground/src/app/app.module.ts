import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibraryModule } from '@scope/your-library-name';

import { AppComponent } from './app.component';

console.log('LibraryModule', LibraryModule);

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, LibraryModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
