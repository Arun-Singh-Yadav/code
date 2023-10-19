import { Component, OnInit } from '@angular/core';
import { FlightDetailsServiceService } from './flight-details-service.service';
import { Airport, AirportsModel } from './model/airports-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public title='flightBookingApp';
  public isReturn:boolean =false;
  public lbltext = 'One Way';
  public sourceList!: Airport[] ;
  public destinationList!: Airport[] ;
  public isSearchClicked:boolean = false;
  public journyDate:Date = new Date('31/12/2023');
  public selectedSource:string='';
  public selectedDestination:string='';

  constructor(private flightDetails:FlightDetailsServiceService){

  }

  public ngOnInit(): void { 
    this.fetchAirportsDetails();
  }


  public fetchAirportsDetails(){
    this.flightDetails.getFlightDetails().subscribe(res=>{
      console.log(res.airports);
      this.sourceList = res.airports;
      this.selectedSource = this.sourceList[0].name
      this.onSourceSelected(this.sourceList[0].code);
    })
  }

  public onSourceSelected(sourceVal:string){
    this.selectedSource = this.sourceList.filter(source=>source.code==sourceVal)[0]?.name
    this.destinationList = this.sourceList.filter(source=>source.code==sourceVal)[0]?.connections;
    this.selectedDestination = this.destinationList[0]?.name;
  }
  
  public onDestinationSelected(destVal:string){
    this.selectedDestination = this.destinationList.filter(dest=>dest.code==destVal)[0].name;
  }

  public displayDate(){
    if(this.isReturn){
      this.lbltext = 'Return';
    }else{
      this.lbltext = 'One Way'
    }
  }

  public OnSearchClck(){
    this.isSearchClicked=true;
  }
}
