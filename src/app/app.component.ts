import { Component } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test';
  username:any;
  Password:any;
  constructor(private router: Router){}

  public submit(){
    this.Password;
    this.username;
    if( this.username=='1' && this.Password=='1'){
    console.log(this.Password,'----',this.username);
    
    // this.router.navigate(['/main-page']);
  this.router.navigate(['/main-page'], { replaceUrl: true });
  }
  
}
}
