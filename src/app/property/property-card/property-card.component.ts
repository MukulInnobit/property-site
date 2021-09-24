import { Component, OnInit, AfterViewInit, Input } from "@angular/core";
import { IProperty } from "../IProperty.interface";

@Component({
  selector: "app-property-card",
  templateUrl: "./property-card.component.html",
  styleUrls: ["property-card.component.css"],
})
export class PropertyCardComponent implements OnInit, AfterViewInit {

  @Input() properties:IProperty;
  constructor() {}

  // properties={
  //   Id:'1',
  //   Type:'House',
  //   Price:'10000'
  // }

  ngOnInit() {
    console.log(this.properties)
  }

  ngAfterViewInit() {}

}
