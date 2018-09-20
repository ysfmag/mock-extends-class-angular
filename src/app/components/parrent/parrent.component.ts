import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parrent",
  templateUrl: "./parrent.component.html",
  styleUrls: ["./parrent.component.css"]
})
export class ParrentComponent implements OnInit {
  clientInformation = 0;
  parrentParams = {
    id: 1,
    name: "hamid"
  };
  constructor() {}

  getProcessName() {
    return "parrentProcess";
  }

  ngOnInit() {}
}
