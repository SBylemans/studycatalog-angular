import { Component, OnInit } from '@angular/core';
import {Study} from '../study';
import {User} from '../user';
import {StudyService} from '../study.service';

@Component({
  selector: 'app-studycatalog',
  templateUrl: './studycatalog.component.html',
  styleUrls: ['./studycatalog.component.less']
})
export class StudycatalogComponent implements OnInit {
  studies: Study[] = [];
  users: User[] = [];


  constructor(private studyService: StudyService) { }

  ngOnInit() {
    this.studyService.getStudies().subscribe(studies => this.studies = studies);
  }

}
