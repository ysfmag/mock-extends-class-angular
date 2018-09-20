import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ParrentComponent } from "./components/parrent/parrent.component";
import { ChildComponent } from "./components/child/child.component";

@NgModule({
  declarations: [AppComponent, ParrentComponent, ChildComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
