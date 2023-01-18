import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }



  baseUrl = "https://api.themoviedb.org/3"
  
  apiKey = "08cc33bd5ae3a747598ce2ad84376e66";

   bannerApiData():Observable<any>
   {
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`)
   }
  // bannerApi = `${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`
  

  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`);
  }
  trendingMovieApiData1(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28`);
  }


  getSearchMovie(data: any): Observable<any>
   {
    // console.log(data, 'movie#');

    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`);
  }
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.apiKey}`)
  }

  depo(id:Boolean)
  {
     id=true
  }
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28`);
  }
}

