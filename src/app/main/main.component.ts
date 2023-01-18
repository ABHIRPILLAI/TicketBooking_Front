import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieApiServiceService } from '../service/movie-api-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
user=""
  constructor(private service:MovieApiServiceService,private router:Router) {
    if (localStorage.getItem('currentUser')) {
      this.user=JSON.parse(localStorage.getItem('currentUser')||"")//give the value to user and do string interpolattion
    }
   }
  bannerResult:any=[]
  thrillerMovieResult: any = [];

  trendingMovieResult:any=[]
  trendingMovieResult1:any=[]

  ngOnInit(): void {
    this.bannerData()
    this.trendingData()
    if(!localStorage.getItem('currentUser'))
    {
      alert('Please Login')
      this.router.navigateByUrl("");
    }
    this.user=JSON.parse(localStorage.getItem('currentUser')||"");
    console.log(this.user);
  }
  //bannerData
  bannerData()
  {
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerResult');
      this.bannerResult = result.results
      
    })
  }

    trendingData()
    {
      this.service.trendingMovieApiData().subscribe((result)=>{
        console.log(result,'trenMoive');
        this.trendingMovieResult = result.results;
        
      })
  }
  trendingData1()
  {
    this.service.trendingMovieApiData1().subscribe((result)=>{
      console.log(result,'trenMoive');
      this.trendingMovieResult1 = result.results;
      
    })
}
thrillerMovie() {
  this.service.fetchThrillerMovies().subscribe((result) => {
    this.thrillerMovieResult = result.results;
  });
}
logout(){
  //remove username and acno

  localStorage.removeItem('currentAcno')
  localStorage.removeItem('currentUser')

  this.router.navigateByUrl('')
}

}


