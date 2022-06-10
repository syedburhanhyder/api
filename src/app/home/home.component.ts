import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../serivce/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
page:number=1;
  filterpage = '';
  filterpagesize = '';
  filterfromdate = '';
  filtertodate = '';
  filterorder = 'order=desc&';
  filterq = '';
  filtermin = '';
  filtermax = '';
  filtersort = 'sort=activity&';
  filteraccepted = '';
  filteranswers = '';
  filterbody = '';
  filterclosed = '';
  filtermigrated = '';
  filternotice = '';
  filternottagged = '';
  filtertagged = '';
  filtertitle = '';
  filteruser = '';
  filterurl = '';
  filterviews = '';
  filterwiki = '';
  filtersite = 'site=stackoverflow';
url:any;

  result: any='';


showHide:boolean=true;






  advanceSearchForm = new FormGroup({

    page: new FormControl(''),
    pagesize: new FormControl(''),
    fromdate: new FormControl(''),
    todate: new FormControl(''),
    order: new FormControl(''),
    min: new FormControl(''),
    max: new FormControl(''),
    sort: new FormControl(''),
    q: new FormControl(''),
    accepted: new FormControl(''),
    answers: new FormControl(''),
    body: new FormControl(''),
    closed: new FormControl(''),
    migrated: new FormControl(''),
    notice: new FormControl(''),
    nottagged: new FormControl(''),
    tagged: new FormControl(''),
    title: new FormControl(''),
    user: new FormControl(''),
    views: new FormControl(''),
    url: new FormControl(''),
    wiki: new FormControl(''),

  });
  tbl: any;



  constructor(private api: ApiService,private router:Router) { }

  ngOnInit(): void {

  }
  changedPage(value) {
    
    this.filterpage = "page=" + value.target.value + '&'
  }
  changedPageSize(value) {
    
    this.filterpagesize = "pagesize=" + value.target.value + '&'
  }
  changedFromDate(value) {
    
    this.filterfromdate = "fromdate=" + value.target.value + '&'
  }
  changedToDate(value) {
    
    this.filtertodate = "todate=" + value.target.value + '&'
  }
  changedOrder(value) {
    
    this.filterorder = "order=" + value.target.value + '&'
  }
  changedSort(value) {
    
    this.filtersort = "sort=" + value.target.value + '&'
  }
  changedQ(value) {
    
    this.filterq = "q=" + value.target.value + '&'
  }
  changedMin(value) {
    
    this.filtermin = "min=" + value.target.value + '&'
  }
  changedMax(value) {
    
    this.filtermax = "max=" + value.target.value + '&'
  }

  changedAnswers(value) {
    
    this.filteranswers = "answers=" + value.target.value + '&'
  }

  changedNottagged(value) {
    
    this.filternottagged = "nottagged=" + value.target.value + '&'
  }
  changedTagged(value) {
    
    this.filtertagged = "tagged=" + value.target.value + '&'
  }
  changedNotice(value) {
    
    this.filternotice = "notice=" + value.target.value + '&'
  }
  changedWiki(value) {
    
    this.filterwiki = "wiki=" + value.target.value + '&'
  }
  changedClosed(value) {
    
    this.filterclosed = "closed=" + value.target.value + '&'
  }
  changedMigrated(value) {
    
    this.filtermigrated = "migrated=" + value.target.value + '&'
  }
  changedAccepted(value) {
    
    this.filteraccepted = "accepted=" + value.target.value + '&'
  }
  changedTitle(value) {
    
    this.filtertitle = "title=" + value.target.value + '&'
  }
  changedUrl(value) {
    
    this.filterurl = "url=" + value.target.value + '&'
  }
  changedBody(value) {
    
    this.filterbody = "body=" + value.target.value + '&'
  }
  changedViews(value) {
    
    this.filterviews = "views=" + value.target.value + '&'
  }
  changedUser(value) {
    
    this.filteruser = "user=" + value.target.value + '&'
  }

  onSubmit() {
    // console.log(this.advanceSearchForm.value);

this.url='https://api.stackexchange.com/2.3/search/advanced?'+this.filterpage+this.filterpagesize+this.filterfromdate+this.filtermin+this.filtermax+this.filterorder+this.filtersort+this.filterq+this.filterbody+this.filteraccepted+this.filtermigrated+this.filternotice+this.filterclosed+this.filterwiki+this.filteranswers+this.filtertitle+this.filtertagged+this.filternottagged+this.filteruser+this.filterviews+this.filterurl+this.filtersite;

    this.api.fetchResults(this.url).subscribe(
      (res: any[]) =>{
        this.result =res;
        let x= this.result.items;
       this.tbl=x.length;
       
      }
      
      
    
    );
    this.showHide=!this.showHide;

   
 
  }
  showForm(){
    this.showHide=!this.showHide;

  }

}
