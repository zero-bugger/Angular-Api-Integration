import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'AngularIntegraion-RandomAPI';
  user:any;

  constructor(private userService:UserService,private toaster:ToastrService){}

  ngOnInit(){
      this.userService.getUser().subscribe((user:any)=>{
        
        this.user=user.results[0];
        console.log(user);
      },
      (err)=>{
        this.toaster.error(err.status,"Error while fetching data...")
      },
      
      )

  }
  ngOnDestroy() {
    if (this.user) {
      this.user.getUser().unsubscribe();
    }
  }
  refresh(){
   this.ngOnInit();
    
  }
}

