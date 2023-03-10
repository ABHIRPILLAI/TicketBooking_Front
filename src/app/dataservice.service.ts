import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const options={
  headers:new HttpHeaders()
}


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }

  login(email:any,password:any){
    
    const data={
      email,
      password    
    }

    return this.http.post('http://localhost:3000/login',data)
  }


  register(email:any,username:any,password:any){

    const data={
   
      email,
      username,
      password,
    }

    return this.http.post('http://localhost:3000/register',data)//asynchronous call to conncet btw fe and be in be we use cors 

    

   }


   getToken()
   {
    //fetch token
    const token = JSON.parse(localStorage.getItem('token')||'')
    //assign to headers
    let headers=new HttpHeaders()
    if(token)
    {
      options.headers=headers.append('x-access-token',token)
    }
    return options//to get token

   }
   
   deposit(email:any,seat:any,seattype:any,theatre:any,amt:any)
   {
    const data={
      email,
      seat,
      seattype,
      theatre,


      amount:amt
    }

    return this.http.post('http://localhost:3000/deposit',data, this.getToken())
}
deposit2(email:any,date:any)
{
 const data={
  email,
  date,

 }

 return this.http.post('http://localhost:3000/deposit2',data, this.getToken())
}
deposit3(email:any,time:any)
{
 const data={
  email,
  time,

 }

 return this.http.post('http://localhost:3000/deposit3',data, this.getToken())
}
deposit4(email:any,seat:any)
{
 const data={
  email,
  seat,

 }

 return this.http.post('http://localhost:3000/deposit4',data, this.getToken())
}
deposit5(email:any,amount:any)
{
 const data={
  email,
  amount,

 }

 return this.http.post('http://localhost:3000/deposit5',data, this.getToken())
}




getTransaction(email:any)
{
 const data={
   email
 }

 return this.http.post('http://localhost:3000/transaction',data, this.getToken())
}


getTransaction2(email:any)
{
 const data={
   email
 }

 return this.http.post('http://localhost:3000/transaction2',data, this.getToken())
}
getTransaction3(email:any)
{
 const data={
   email
 }

 return this.http.post('http://localhost:3000/transaction3',data, this.getToken())
}
getTransaction4(email:any)
{
 const data={
   email
 }

 return this.http.post('http://localhost:3000/transaction4',data, this.getToken())
}
getTransaction5(email:any)
{
 const data={
   email
 }

 return this.http.post('http://localhost:3000/transaction5',data, this.getToken())
}
}
