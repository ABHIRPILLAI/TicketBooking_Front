import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchComponent } from './pages/search/search.component';
import { RegisterComponent } from './register/register.component';
import { TicketComponent } from './ticket/ticket.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {
    path:"",component:LoginComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"main",component:MainComponent
  },
  {
    path:"main/search",component:SearchComponent
  },
  {
    path:"main/movie/:id",component:MovieDetailsComponent
  },
  {
    path:"rent/:id",component:TransactionComponent
  },
  {
    path:"book/:id",component:BookTicketComponent
  },
  {
    path:"tick/:id",component:TicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
