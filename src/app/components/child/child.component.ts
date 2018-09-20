import { Component, OnInit } from "@angular/core";
import { ParrentComponent } from "src/app/components/parrent/parrent.component";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent extends ParrentComponent {
  constructor() {
    super();
  }

  ngOnInit() {}
}
