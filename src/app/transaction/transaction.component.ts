import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { MovieApiServiceService } from '../service/movie-api-service.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  getMovieDetailResult:any;

  depoForm=this.fb.group({//group
    // uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],//array
    email:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    seat:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9]")]],
    seattype:['',[Validators.required,Validators.pattern("^[a-zA-Z]")]],
    theatre:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9]")]],



  })
  constructor(private fb:FormBuilder,private ds:DataserviceService,private rout:Router,private service:MovieApiServiceService,private router:ActivatedRoute) { }

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
 depo:any 
deposit(){
  var email=this.depoForm.value.email;
  var seat=this.depoForm.value.seat;
  var seattype  =this.depoForm.value.seattype;
  var theatre = this.depoForm.value.theatre
  var amount=this.depoForm.value.amount;
this.ds.deposit(email,seat,seattype,theatre,amount).
subscribe((result:any)=>{
  alert(result.message)
  // this.rout.navigateByUrl("/tick")
 this.depo= this.service.depo
  
},(result:any)=>{
  alert(result.error.message)
}
)

  // if (this.depositForm.valid) {
  //   if(result)
  // {
  //   alert(`${amount} is credited ... Available balance is ${result}` )
  // }
  // else{
  //   alert('Transaction error');
  // }
  // }else{
  //   alert('invalid form')
  // }
  
}
}
