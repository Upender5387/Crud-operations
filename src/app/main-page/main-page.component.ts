import { ThisReceiver } from '@angular/compiler';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../main-page.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  username: any;
  logindata: any;
  Password: any;
  Address: any;
  show = false;
  show1 = false;
  items = ['student', 'employee', 'class', 'school'];
  height: any;
  data: any;
  selectedItem: any
  City: any;
  PostalCode: any;
  LastName: any;
  FirstName: any;
  appdetails: any = [];
  Customerid: any;
  dateselected: any;


  constructor(private MainPageService: MainPageService) { }
  ngOnInit(): void {
    this.getdata()
  }
  public getdata() {
    this.MainPageService.getnavList('Class2/Get2').subscribe((data) => {
      this.appdetails = data
    });
  }
  public submit() {
    console.log(this.dateselected, 'selectedItem')
    this.logindata = {
      Customersid: this.Customerid,
      FirstName: this.FirstName,
      LastName: this.LastName,
      Address: this.Address,
      City: this.dateselected,
      PostalCode: this.selectedItem,
      Username: 'USERNAME',
      Password: 'PASSWORD',
    };
    this.MainPageService.setnavList('Class2/insert1', this.logindata).subscribe((data) => {
      this.getdata()
    });
    this.Reset();
  }
  public closepopup() {
    this.show = false;
    this.show1 = false;
  }
  public Edit() {
    this.show = true;
    this.logindata = {

      Customerid: this.Customerid,
      FirstName: this.FirstName,
      LastName: this.LastName,
      Address: this.Address,
      City: this.City,
      PostalCode: this.PostalCode,
      username: this.username,
      Password: this.Password,
    };

    this.MainPageService.setnavList('Class2/Update1', this.logindata).subscribe((data) => {
      this.getdata()
    });
  }
  public Edit1(rowData: any): void {
    this.show = true;
    this.Customerid = rowData.Customerid;
    this.FirstName = rowData.FirstName;
    this.LastName = rowData.LastName;
    this.getdata();
  }
  public Delete1(rowData: any): void {
    console.log('Clicked button in row with data:', rowData.Customerid);
    this.Customerid = rowData.Customerid;
    this.show1 = true;
  }
  public Delete() {
    this.logindata = {
      Customerid: this.Customerid,
    };

    this.MainPageService.deletenavList('Class2/Delete', this.logindata).subscribe((data) => {
      this.getdata()
    });
    this.show1 = false;
  }
  public save() {
    this.logindata = {
      Customerid: this.Customerid,
      FirstName: this.FirstName,
      LastName: this.LastName,
      Address: this.Address,
      City: this.City,
      PostalCode: this.PostalCode,
      username: this.username,
      Password: this.Password,
    };

    this.MainPageService.setnavList('Class2/Update1', this.logindata).subscribe((data) => {
      this.getdata()
    });
    this.show = false;
  }

  public Reset() {
    this.FirstName = ''
    this.LastName = ''
    this.Address = ''
    this.City = ''
    this.PostalCode = ''
    this.username = ''
    this.Password = ''
    this.Customerid= ''
    this.dateselected= ''
    this.selectedItem= ''
  }

}
