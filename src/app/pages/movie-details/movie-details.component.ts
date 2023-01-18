import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title,Meta } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from 'src/app/dataservice.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  
depo:any
datee:any
  constructor(private service:MovieApiServiceService,private router:ActivatedRoute,private fb:FormBuilder,private ds:DataserviceService) {

   }
  getMovieDetailResult:any;
  trendingMovieResult:any=[];

  thrillerMovieResult: any = [];
  dateForm=this.fb.group({//group
    date:['',[Validators.required,]],
    
  })
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getMovie(getParamId);
   
  }

 

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe(async(result)=>{
        console.log(result,'getmoviedetails#');
        this.getMovieDetailResult = await result;

    });
  }
  trendingData()
  {
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,'trenMoive');
      this.trendingMovieResult = result.results;
      
    })

}
thrillerMovie() {
  this.service.fetchThrillerMovies().subscribe((result) => {
    this.thrillerMovieResult = result.results;
  });
}

 date()
 {
  var email=JSON.parse(localStorage.getItem('currentEmail')||"")//give the value to user and do string interpolattion
  var date=this.dateForm.value.date;
  this.ds.deposit2(email,date).
  subscribe((result:any)=>{
    alert(result.message)
    // this.rout.navigateByUrl("/tick")
   this.depo= this.service.depo
    
  },(result:any)=>{
    alert(result.error.message)
  }
  )
  
    
  }
}
