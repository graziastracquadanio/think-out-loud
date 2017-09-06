import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";
import { Autosize } from "angular2-autosize/src/autosize.directive";
import { BrowserModule } from "@angular/platform-browser";
import { environment } from "../environments/environment";
import { ThoughtsService } from "services";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ThoughtsTimelineComponent } from "./components/thoughts-timeline/thoughts-timeline.component";
import { NewThoughtComponent } from "./components/new-thought/new-thought.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@NgModule({
  declarations: [
    Autosize,
    AppComponent,
    ThoughtsTimelineComponent,
    NewThoughtComponent,
    LoaderComponent,
    SnackbarComponent
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    FormsModule
  ],
  providers: [ThoughtsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
