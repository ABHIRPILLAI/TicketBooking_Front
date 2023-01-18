import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { MovieApiServiceService } from '../service/movie-api-service.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  getMovieDetailResult:any;

  constructor(private service:MovieApiServiceService,private router:ActivatedRoute,private ds:DataserviceService) { }
  email:any//to hold currentAcno value
  details:any
  details2:any
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getMovie(getParamId);
    this.email=JSON.parse(localStorage.getItem('currentEmail')||"");
    this.ds.getTransaction(this.email).subscribe(
      (result:any)=>{
       this.details=result.Booking_Details
      },(result)=>{
        alert(result.error.message)
      }
    )
    this.ds.getTransaction2(this.email).subscribe(
      (result:any)=>{
       this.details2=result.Date
      },(result)=>{
        alert(result.error.message)
      }
    )
  }
  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe(async(result)=>{
        console.log(result,'getmoviedetails#');
        this.getMovieDetailResult = await result;

    });
  }
}
