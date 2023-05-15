import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainPageService } from '../main-page.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username: any;
  Password: any;
  constructor(private router: Router,private MainPageService: MainPageService) { }
  public submit() {
    this.MainPageService.getLoginList('Class2/Login',this.username,this.Password).subscribe((data) => {
      console.log(data,'data')
      if(data.length !==0)
      {
        this.router.navigate(['/main-page']);
      }
       else{
        alert('Incorrect');
       }
      
      });

  }

  ngOnInit(): void {
  }

}
