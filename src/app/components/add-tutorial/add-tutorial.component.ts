import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {


  employee: Employee = {
    name: '',
    salary: 0,
    role: '',
    address: '',
    office: '',
    branch: '',
    email: '',
    phone: ''
  };
  seniority = 0;
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    this.tutorialService.create(this.employee, this.seniority)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.employee = {
      name: '',
      salary: 0,
      role: '',
      address: '',
      office: '',
      branch: '',
      email: '',
      phone: ''
    };
  }

}
