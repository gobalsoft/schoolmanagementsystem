import { Component, OnInit } from '@angular/core';
import {SchoolService} from 'src/app/school.service';
import {Router} from "@angular/router";
  import { from } from 'rxjs';
import { SchoolAcademic } from 'src/app/student';

@Component({
  selector: 'app-school-academic-year',
  templateUrl: './school-academic-year.component.html',
  styleUrls: ['./school-academic-year.component.css']
})
export class SchoolAcademicYearComponent implements OnInit {
academic:SchoolAcademic[]=[];

  constructor(private router: Router,private schoolService:SchoolService) { }

  ngOnInit() {
 

    this.schoolService.get().subscribe((data: SchoolAcademic[])=>{
      debugger;
      console.log(data);
      this.academic = data;
      
      for(let  i=0;this.academic.length>i;i++){
        console.log("for"+this.academic[i].academicStartDate);
      }
      console.log(this.academic);
    });
 
  }

  

}
