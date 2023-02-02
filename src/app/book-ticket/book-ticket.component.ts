import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { MovieApiServiceService } from '../service/movie-api-service.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  getMovieDetailResult:any;
  depoForm=this.fb.group({//group
    // uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],//array
    email:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
  constructor(private fb:FormBuilder,private ds:DataserviceService,private service:MovieApiServiceService,private router:ActivatedRoute,private rout:Router) {
    if (localStorage.getItem('currentEmail')) {
      this.user=JSON.parse(localStorage.getItem('currentEmail')||"")//give the value to user and do string interpolattion
    }
   }

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getMovie(getParamId);

        this.emailForm=this.fb.group({
      email : ['',Validators.required,Validators.email],
      pswd : ['',Validators.required]
    })
  }
  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe(async(result)=>{
        console.log(result,'getmoviedetails#');
        this.getMovieDetailResult = await result;

    });

  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  th1="TH1"
  th2="TH2"
  th3="TH3"
  th4="TH4"
  user="";
  seatName:any=[];;
  toppings = new FormControl('');
  
  seatNName:any;
  toppingList: string[] = [];
  Count=[]
  toggleTH1 = true;
  statusTH1 = ""; toggleTH3 = true;
  statusTH2 = ""; toggleTH2 = true;
  statusTH3 = "";
  toggle = true;
  status = "";
  togglePS = true;
  statusPS = "";
  toggleES = true;
  statusES = "";
  toggleNS = true;
  statusNS = "";
  toggle4b = true;
  status4b = "";
  toggle1b = true;
  status1b = "";
  toggle2b = true;
  status2b = "";
  toggle3b = true;
  status3b = "";
  toggle5b = true;
  status5b = "";
  toggle6b = true;
  status6b = "";
  toggle7b = true;
  status7b = "";
  toggle8b = true;
  status8b = "";
  count :any
  status1 = "";
  status2 = "";
  status3 = "";
  status4 = "";
  status5 = "";
  status6 = "";
  status7 = "";
  status8 = "";
  count1:any
  count3:any
  toggle1 = true;
  toggle2 = true;
  toggle3 = true;
  toggle4 = true;
  toggle5 = true;
  toggle6 = true;
  toggle7 = true;
  toggle8 = true;
  toggle9 = true;
  status9 = "";
  toggle10 = true;
  status10 = "";
  toggle11 = true;
  status11 = "";
  toggle12 = true;
  status12 = "";
  toggle13 = true;
  status13 = "";
  toggle14 = true;
  status14 = "";
  toggle15 = true;
  status15 = "";toggle18 = true;
  status16 = "";toggle16 = true;
  status17 = "";toggle17 = true;
  status18 = "";toggle19 = true;
  status19 = "";toggle20 = true;
  status20 = "";
  backTH1:any;

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? "" : "E1";
    this.count="E1"
  }
  enableDisableRule1() {
    this.toggle1 = !this.toggle1;
    this.status1 = this.toggle1 ? "" : "A1";
    this.count1="A1"
  }
  enableDisableRule2() {
    this.toggle2 = !this.toggle2;
    this.status2 = this.toggle2 ? "" : "A2";
  }  enableDisableRule3() {
    this.toggle3 = !this.toggle3;
    this.status3 = this.toggle3 ? "" : "A3";
  }  enableDisableRule4() {
    this.toggle4 = !this.toggle4;
    this.status4 = this.toggle4 ? "" : "A4";
  }  enableDisableRule5() {
    this.toggle5 = !this.toggle5;
    this.status5 = this.toggle5 ? "" : "A5";
  }  enableDisableRule6() {
    this.toggle6 = !this.toggle6;
    this.status6 = this.toggle6 ? "" : "A6";
  }  enableDisableRule7() {
    this.toggle7 = !this.toggle7;
    this.status7 = this.toggle7 ? "" : "A7";
  }
  enableDisableRule8() {
    this.toggle8 = !this.toggle8;
    this.status8 = this.toggle8 ? "" : "A8";
  }
  enableDisableRule9() {
    this.toggle9 = !this.toggle9;
    this.status9 = this.toggle9 ? "" : "B1";
  }  enableDisableRule10() {
    this.toggle10 = !this.toggle10;
    this.status10 = this.toggle10 ? "" : "B2";
  }  enableDisableRule11() {
    this.toggle11 = !this.toggle11;
    this.status11 = this.toggle11 ? "" : "B3";
    this.count3="B3"
  }  enableDisableRule12() {
    this.toggle12 = !this.toggle12;
    this.status12 = this.toggle12 ? "" : "B6";
  }  enableDisableRule13() {
    this.toggle13 = !this.toggle13;
    this.status13 = this.toggle13 ? "" : "B7";
  }  enableDisableRule14() {
    this.toggle14 = !this.toggle14;
    this.status14 = this.toggle14 ? "" : "B8";
  }
  enableDisableRule15() {
    this.toggle15 = !this.toggle15;
    this.status15 = this.toggle15 ? "" : "C1";
  } enableDisableRule16() {
    this.toggle16 = !this.toggle16;
    this.status16 = this.toggle16 ? "" : "C2";
  } enableDisableRule17() {
    this.toggle17 = !this.toggle17;
    this.status17 = this.toggle17 ? "" : "C3";
  } enableDisableRule18() {
    this.toggle18 = !this.toggle18;
    this.status18 = this.toggle18 ? "" : "C4";
  } enableDisableRule19() {
    this.toggle19 = !this.toggle19;
    this.status19 = this.toggle19 ? "" : "C5";
  } enableDisableRule20() {
    this.toggle20 = !this.toggle20;
    this.status20 = this.toggle20 ? "" : "C6";
  }
  enableDisableRule1b() {
    this.toggle1b = !this.toggle1b;
    this.status1b = this.toggle1b ? "Enable" : "Disable";
  }
  enableDisableRule2b() {
    this.toggle2b = !this.toggle2b;
    this.status2b = this.toggle2b ? "Enable" : "Disable";
  }  enableDisableRule3b() {
    this.toggle3b = !this.toggle3b;
    this.status3b = this.toggle3b ? "Enable" : "Disable";
  }  enableDisableRule5b() {
    this.toggle5b = !this.toggle5b;
    this.status5b = this.toggle5b ? "Enable" : "Disable";
  }  enableDisableRule6b() {
    this.toggle6b = !this.toggle6b;
    this.status6b = this.toggle6b ? "Enable" : "Disable";
  }  enableDisableRule7b() {
    this.toggle7b = !this.toggle7b;
    this.status7b = this.toggle7b ? "Enable" : "Disable";
  }  enableDisableRule8b() {
    this.toggle8b = !this.toggle8b;
    this.status8b = this.toggle8b ? "Enable" : "Disable";
  }  enableDisableRule4b() {
    this.toggle4b = !this.toggle4b;
    this.status4b = this.toggle4b ? "Enable" : "Disable";
  }
  enableDisableRulePS() {
    this.togglePS = !this.togglePS;
    this.statusPS = this.togglePS ? "" : "Premium Seat";
  }
  enableDisableRuleES() {
    this.toggleES = !this.toggleES;
    this.statusES = this.toggleES ? "" : "Executive Seat";
  }
  enableDisableRuleNS() {
    this.toggleNS = !this.toggleNS;
    this.statusNS = this.toggleNS ? " " : "Normal Seat";
  }
  enableDisableRuleth1() {
    this.toggleTH1 = !this.toggleTH1;
    this.statusTH1 = this.toggleTH1 ? "" : "TH1";

  }
  enableDisableRuleth2() {
    this.toggleTH2 = !this.toggleTH2;
    this.statusTH2 = this.toggleTH2 ? "" : "TH2";
  }  enableDisableRuleth3() {
    this.toggleTH3 = !this.toggleTH3;
    this.statusTH3 = this.toggleTH3 ? "" : "TH3";
  }

  deposit(){
  //   var email=this.depoForm.value.email;
  //   var amount=this.depoForm.value.amount;
  // this.ds.deposit(email,amount).
  // subscribe((result:any)=>{
  //   alert(result.message)

  // },(result:any)=>{
  //   alert(result.error.message)
  // }
  // )
  

    
  // }
}
seat:any
number:any
amount:any
data()
{
  this.seat=500
}
Number5()
{
  this.number=this.seat*5
  this.amount=this.number
}
data3()
{
  this.seat=750
}
data2()
{
  this.seat=250
}
Number1()
{
  this.number=this.seat*1
  this.amount=this.number
}
Number2()
{
  this.number=this.seat*2
  this.amount=this.number
}Number3()
{
  this.number=this.seat*3
  this.amount=this.number
}Number6()
{
  this.number=this.seat*6
  this.amount=this.number
}Number7()
{
  this.number=this.seat*7
  this.amount=this.number
}Number8()
{
  this.number=this.seat*8
  this.amount=this.number
}Number4()
{
  this.number=this.seat*4
  this.amount=this.number

}
alert()
{
  var email=JSON.parse(localStorage.getItem('currentEmail')||"")
  var amount=parseInt(this.amount)
  this.ds.deposit5(email,amount).
  subscribe((result:any)=>{
    // this.rout.navigateByUrl("/tick")
    console.log(result);
      },(result:any)=>{
    alert(result.error.message)
  }
  )
 
  }

emailForm !: FormGroup;

trendingData()
{
  this.service.trendingMovieApiData().subscribe((result)=>{
    console.log(result,'trenMoive');
    this.getMovieDetailResult = result.results;
    
  })
}
seatA1()
{
  // var seat="A1"
  this.seatNName=this.seatName.push("A1")

  

}
seatA2()
{
  this.seatNName=this.seatName.push("A2")

  

}
seatA3()
{
  this.seatNName=this.seatName.push("A3")

  

}
seatA4()
{
  this.seatNName=this.seatName.push("A4")

  

}
seatA5()
{
  this.seatNName=this.seatName.push("A5")

  

}
seatA6()
{
  this.seatNName=this.seatName.push("A6")

  

}
seatA7()
{
  this.seatNName=this.seatName.push("A7")

  

}seatA8()
{
  this.seatNName=this.seatName.push("A8")
 

}
seatB1()
{
  this.seatNName=this.seatName.push("B1")
 
}
seatB2()
{
  this.seatNName=this.seatName.push("B2")

}
seatB3()
{
  this.seatNName=this.seatName.push("B3")

  

}
seatB6()
{
  this.seatNName=this.seatName.push("B6")

  

}
seatB7()
{
  this.seatNName=this.seatName.push("B7")

  

}
seatB8()
{
  this.seatNName=this.seatName.push("B8")

  

}
seatConfirm()
{
  var email=JSON.parse(localStorage.getItem('currentEmail')||"")//give the value to user and do string interpolattion
  this.ds.deposit4(email,this.seatName).
  subscribe((result:any)=>{
    // this.rout.navigateByUrl("/tick")
    console.log(result);
      },(result:any)=>{
    alert(result.error.message)
  }
  )
  
}
}
