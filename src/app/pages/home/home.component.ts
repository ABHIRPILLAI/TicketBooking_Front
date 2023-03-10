import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:MovieApiServiceService) { }
  bannerResult:any=[]

  ngOnInit(): void {
    this.bannerData()
  }
  bannerData()
  {
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerResult');
      this.bannerResult = result.results
      
    })
}
}
