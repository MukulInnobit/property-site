import { Component, OnInit, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-property-card",
  templateUrl: "./property-card.component.html",
  styleUrls: ["property-card.component.css"],
})
export class PropertyCardComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  Property: any = {
    Id: 1,
    Type: "House",
    Price: 12000,
  };
}
