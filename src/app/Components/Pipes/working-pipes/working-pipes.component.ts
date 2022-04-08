import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-working-pipes',
  templateUrl: './working-pipes.component.html',
  styleUrls: ['./working-pipes.component.css']
})
export class WorkingPipesComponent implements OnInit {

  students = [
    {name: 'John',
    course: 'Dipolma in Business Administration and Managment',
    status: 'fresher',
    started: new Date(2017,1,13),
    },

    {name: 'Sarah',
      course: 'Bachelor in Chartered Accountancy ',
      status: '3rdYear',
      started: new Date(2015,2,10),
    },

    {name: 'Rose',
      course: 'Computer Science',
      status: 'Honours',
      started: new Date(2014,3,3),
    },
    {name: 'James',
      course: 'IT Network Managment',
      status: 'fresher',
      started: new Date(2021,2,13),
    },

    {name: 'Mary',
      course: 'Bachelor in Journalism ',
      status: 'fresher',
      started: new Date(2022,2,12),
    },

    {name: 'Anna',
      course: 'Law',
      status: 'Honours',
      started: new Date(2016,1,12),
    },
  ];

  filteredStatus = '';

  getStatusClass(student: {name: string, course: string, status: string, started: Date}){
    return{
      'list-group-item-primary' : student.status === 'fresher',
      'list-group-item-success' : student.status === '3rdYear',
      ' list-group-item-warning' : student.status === 'Honours',
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
