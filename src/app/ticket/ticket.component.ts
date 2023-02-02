import { Component, OnInit , ViewChild ,ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { MovieApiServiceService } from '../service/movie-api-service.service';
import { jsPDF } from "jspdf";


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  getMovieDetailResult:any;

  constructor(private service:MovieApiServiceService,private router:ActivatedRoute,private ds:DataserviceService) {
  this.sdate=new Date()//for system date and assign to sdate and string interpolation
  if (localStorage.getItem('currentUser')) {
    this.user=JSON.parse(localStorage.getItem('currentUser')||"")//give the value to user and do string interpolattion
  }

   }
   @ViewChild('content',{static:false})el!:ElementRef;
   user=""
  email:any//to hold currentAcno value
  details:any
  details2:any
  details3:any
  details4:any
  sdate:any
  x =Math.floor((Math.random() * 10) + 1);
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
    this.ds.getTransaction3(this.email).subscribe(
      (result:any)=>{
       this.details3=result.Time
      },(result)=>{
        alert(result.error.message)
      }
    )

    this.ds.getTransaction4(this.email).subscribe(
      (result:any)=>{
       this.details4=result.Seat
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
  makePDF()
  {
   let pdf= new jsPDF('l','pt','a4');
  //  pdf.text("Ticket details",10,10);
  pdf.html(this.el.nativeElement,{
    callback: (pdf)=>{
      pdf.save('ticket.pdf');

    }
  })
  }
}
