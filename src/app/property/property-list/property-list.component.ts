import { Component, OnInit } from "@angular/core";
import { AppRoutingModule } from "src/app/app-routing.module";
import { HousingService } from "src/app/services/housing.service";
import { IProperty } from "../IProperty.interface";
@Component({
  selector: "app-property-list",
  templateUrl: "./property-list.component.html",
  styleUrls: ["./property-list.component.css"],
})
export class PropertyListComponent implements OnInit {
  constructor(private housingService:HousingService) {}
  
  Properties: Array<IProperty>;

  ngOnInit(): void {

    this.housingService.getAllProperties().subscribe(
      data=>{
        this.Properties=data
      },error=>{
        console.log(error)
      }
    )
    // this.http.get("data/data.json").subscribe(
    //   data=>{
    //     this.Properties=data
    //   }
    // )
  }

}
